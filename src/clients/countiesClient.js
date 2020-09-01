const fetch = require('cross-fetch')
const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} = require('@apollo/client')

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
    fetch
  }),
  cache: new InMemoryCache()
})

module.exports = client