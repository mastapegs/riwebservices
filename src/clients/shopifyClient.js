const fetch = require('cross-fetch')
const {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} = require('@apollo/client')
const { setContext } = require('@apollo/client/link/context')

const httpLink = createHttpLink({
  uri: 'https://riwebservices.myshopify.com/api/graphql',
  fetch
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Shopify-Storefront-Access-Token': 'd6dd3608bb7ad64de3d807bb405cb461',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

module.exports = client