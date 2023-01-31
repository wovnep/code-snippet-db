import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import BodyParser from 'body-parser';
import express from 'express';
import { readFileSync } from 'node:fs';
import mongoose from 'mongoose';
import { resolvers } from './resolvers/index.js';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { User } from './models/User.js';
import { User as UserType } from './types/graphql.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config()
const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

const app = express();
const server = new ApolloServer<UserType>({
    typeDefs,
    resolvers,
    includeStacktraceInErrorResponses: false
});

await mongoose.connect(process.env.MONGODB_URI);
await server.start();

app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    BodyParser.json(),
    expressMiddleware(server, {
        context: async ({ req, res }) => {
            const authHeader = req.headers.authorization || '';
            const token = authHeader.split(' ')[1];
            let userId = null;
            try {
                const payload: any = jwt.verify(token, process.env.JWT_STRING);
                userId = payload.userId;
            } catch (error) {
                return null
            }
            const user = await User.findOne({ github_id: userId });
            return user
        },
    })
);

passport.serializeUser((user: any, done) => {
    done(null, user.accessToken);
});

app.use(passport.initialize());

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `${process.env.DOMAIN}/auth/github/callback`,
            scope: ['user:email'],
        },
        async (_, __, profile, done) => {
            let user = await User.findOne({ github_id: profile.id });
            if (user) {
                user.name = profile.displayName;
                await user.save();
            } else {
                user = await (await User.create({ email: profile.emails[0].value, name: profile.displayName, github_id: profile.id })).save();
            }
            done(null, { accessToken: jwt.sign({ userId: user.github_id }, 'randomString', { expiresIn: '1y' }) });
        }
    )
);

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'], session: false }));

app.get('/auth/github/callback', passport.authenticate('github', { session: false, keepSessionInfo: false }), (req: any, res) => {
    res.redirect(`http://localhost:${process.env.EXTENSION_PORT}/auth/${req.user.accessToken}`);
});
app.listen(4000, () => {
    console.log('Server started at http://localhost:4000/');
});
