import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import {readFileSync} from 'node:fs';
import { Resolvers } from "./generated/graphql";

import {ArizaAPI} from './api';
import {User} from './generated/graphql';

interface ContextValue {
    dataSources: {
        ariza: ArizaAPI
    }
}

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers: Resolvers = {
    Query: {
        getUser: async (_, {user_id}, {dataSources}): Promise<User> => {
            return await dataSources.ariza.getUser(user_id);
        }
    }
};

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
    context: async () => {
        const {cache} = server;
        return {
            dataSources: {
                ariza: new ArizaAPI({cache}),
            }
        }
    }
});

console.log(`🚀  Server ready at: ${url}`);

