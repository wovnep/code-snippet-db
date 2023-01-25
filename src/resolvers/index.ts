import { Resolvers } from "../types/graphql.js";
import { queries } from "./queries.js";
import { mutation } from "./mutations.js";

export const resolvers: Resolvers = {
    Query: queries,
    Mutation: mutation
}