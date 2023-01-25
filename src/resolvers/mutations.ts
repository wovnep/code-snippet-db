import { MutationResolvers } from "../types/graphql.js"
import { User } from "../models/User.js"

export const mutation: MutationResolvers = {
    addUser: async (_, { name, email }) => {
        const user = new User({ name, email })
        await user.save()
        return user
    }
}