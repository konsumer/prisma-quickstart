import ApolloClient from 'apollo-boost'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || '/graphql'

const client = new ApolloClient({ uri: GRAPHQL_ENDPOINT })

export default client
