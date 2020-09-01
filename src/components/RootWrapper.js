const React = require('react')
const { ApolloProvider } = require('@apollo/client')
const countriesClient = require('../clients/countriesClient')
const ShopifyContextProvider = require('../providers/ShopifyContextProvider').default

const RootWrapper = ({ element }) => {
  return (
    <ShopifyContextProvider>
      <ApolloProvider client={countriesClient}>
        {element}
      </ApolloProvider>
    </ShopifyContextProvider >
  )

}

module.exports = RootWrapper