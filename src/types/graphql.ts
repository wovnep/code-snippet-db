import { GraphQLResolveInfo } from 'graphql';
import { CodebaseModel, WorkspaceModel, UserModel } from '../models/index.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Codebase = {
  __typename?: 'Codebase';
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  language: Scalars['String'];
  title: Scalars['String'];
  user: User;
  workspace: Workspace;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCode: Codebase;
  createWorkspace: Workspace;
};


export type MutationCreateCodeArgs = {
  code: Scalars['String'];
  language: Scalars['String'];
  title: Scalars['String'];
  workspace_id: Scalars['ID'];
};


export type MutationCreateWorkspaceArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  codebases: Array<Codebase>;
  me: User;
  workspaces: Array<Workspace>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  github_id: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  codes?: Maybe<Array<Maybe<Codebase>>>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  user: User;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Codebase: ResolverTypeWrapper<CodebaseModel>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  Workspace: ResolverTypeWrapper<WorkspaceModel>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Codebase: CodebaseModel;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  User: User;
  Workspace: WorkspaceModel;
}>;

export type CodebaseResolvers<ContextType = UserModel, ParentType extends ResolversParentTypes['Codebase'] = ResolversParentTypes['Codebase']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  workspace?: Resolver<ResolversTypes['Workspace'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = UserModel, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCode?: Resolver<ResolversTypes['Codebase'], ParentType, ContextType, RequireFields<MutationCreateCodeArgs, 'code' | 'language' | 'title' | 'workspace_id'>>;
  createWorkspace?: Resolver<ResolversTypes['Workspace'], ParentType, ContextType, RequireFields<MutationCreateWorkspaceArgs, 'name'>>;
}>;

export type QueryResolvers<ContextType = UserModel, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  codebases?: Resolver<Array<ResolversTypes['Codebase']>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  workspaces?: Resolver<Array<ResolversTypes['Workspace']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = UserModel, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkspaceResolvers<ContextType = UserModel, ParentType extends ResolversParentTypes['Workspace'] = ResolversParentTypes['Workspace']> = ResolversObject<{
  codes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Codebase']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = UserModel> = ResolversObject<{
  Codebase?: CodebaseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Workspace?: WorkspaceResolvers<ContextType>;
}>;

