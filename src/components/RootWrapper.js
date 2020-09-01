const React = require('react')
const { ApolloProvider } = require('@apollo/client')
const countriesClient = require('../clients/countiesClient')

const RootWrapper = ({ element }) => {
  return (
    <ApolloProvider client={countriesClient}>
      {element}
    </ApolloProvider>
  )

}

module.exports = RootWrapper