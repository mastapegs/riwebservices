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
  console.log(process.env.SHOPIFY_STOREFRONT_API_KEY)
  return {
    headers: {
      ...headers,
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_KEY,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

module.exports = client