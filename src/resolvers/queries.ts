import { QueryResolvers } from '../types/graphql.js';
import { User } from '../models/User.js';
import { GraphQLError } from 'graphql';
import { Codebase } from '../models/Codebase.js';
import { Workspace } from '../models/Workspace.js';

export const queries: QueryResolvers = {
    me: async (_, __, contextValue) => {
        if (!contextValue.id)
            throw new GraphQLError('You are not authorized to perform this action.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },
            });
        return await User.findById(contextValue.id);
    },
    codebases: async (_, __, contextValue) => {
        if (!contextValue.id)
            throw new GraphQLError('You are not authorized to perform this action.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },
            });
        return await Codebase.find({ user_id: contextValue.id });
    },
    workspaces: async (_, __, contextValue) => {
        if (!contextValue.id)
            throw new GraphQLError('You are not authorized to perform this action.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },
            });
        return await Workspace.find({ user_id: contextValue.id });
    },
};
