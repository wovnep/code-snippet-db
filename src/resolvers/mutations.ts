import { MutationResolvers } from '../types/graphql.js';
import { GraphQLError } from 'graphql';
import { Workspace } from '../models/Workspace.js';
import { Codebase } from '../models/Codebase.js';

export const mutation: MutationResolvers = {
    createWorkspace: async (_, args, contextValue) => {
        if (!contextValue.id)
            throw new GraphQLError('You are not authorized to perform this action.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },
            });
        const workspace = new Workspace({ name: args.name, user_id: contextValue.id }).save();
        return workspace;
    },
    createCode: async (_, args, contextValue) => {
        if (!contextValue.id)
            throw new GraphQLError('You are not authorized to perform this action.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },
            });
        const codebase = new Codebase({ title: args.title, user_id: contextValue.id, workspace_id: args.workspace_id, code: args.code, language: args.language  }).save();
        return codebase;
    },
};
