import { ResolverMap } from "./types/graphql-utils";


export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`
  },
  Mutation: {
    register(_, { email, password}: GQL.IRegisterOnMutationArguments) => {}
  }
};

type Mutation {
  register(email: String!, password: String!): Boolean
}