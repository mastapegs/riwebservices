const React = require('react')
const fetch = require('cross-fetch')
const {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} = require('@apollo/client')

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
    fetch
  }),
  cache: new InMemoryCache()
})

const RootWrapper = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )

}

module.exports = RootWrapper