import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from "node:fs"
import mongoose from 'mongoose';
import { resolvers } from './resolvers/index.js';
const typeDefs = readFileSync('./src/schema.graphql', { encoding: "utf-8" })
 
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

await mongoose.connect("mongodb://127.0.0.1:27017/snippetdb")

console.log(`🚀  Server ready at: ${url}`);