import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql', // Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;