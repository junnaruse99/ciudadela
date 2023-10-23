const { ApolloClient, InMemoryCache } = require('@apollo/client');
const { createHttpLink } = require('apollo-link-http');

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

module.exports = apolloClient;