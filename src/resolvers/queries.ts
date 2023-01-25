import { QueryResolvers } from "../types/graphql.js"; 
import { User } from "../models/User.js";

export const queries: QueryResolvers = {
    users: async () => await User.find()
}