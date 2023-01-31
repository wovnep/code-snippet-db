import { Resolvers } from '../types/graphql.js';
import { queries } from './queries.js';
import { mutation } from './mutations.js';
import { Codebase } from '../models/Codebase.js';
import { Workspace } from '../models/Workspace.js';
import { User } from '../models/User.js';
export const resolvers: Resolvers = {
    Workspace: {
        codes: async (parent) => await Codebase.find({ workspace_id: parent.id }),
        user: async (_, __, context) => await User.findById(context.id),
    },
    Codebase: {
        workspace: async (parent) => await Workspace.findById(parent.workspace_id),
        user: async (_, __, context) => await User.findById(context.id),
    },
    Query: queries,
    Mutation: mutation,
};
