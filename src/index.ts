import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'node:fs'
import { Resolvers } from './generated/graphql'

import { ArizaAPI } from './api'
import { User } from './generated/graphql'

// NOTE: Here we would refer to the gloclient
interface ContextValue {
    dataSources: {
        ariza: ArizaAPI
    }
}

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

const resolvers: Resolvers<ContextValue> = {
    Query: {
        // NOTE: This was manually added to the schema just to show how it would
        // work, if you rerun the generation it will say this doesn't exist anymore.
        // We would probably want to define a new graph just for the gateway and use
        // some sort of schema stitching...
        getUser: async (_, { userId }, { dataSources }): Promise<User> => {
            return await dataSources.ariza.getUser(userId)
        },
    },
}

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
        const { cache } = server
        return {
            dataSources: {
                ariza: new ArizaAPI({ cache }),
            },
        }
    },
})

console.log(`🚀  Server ready at: ${url}`)
