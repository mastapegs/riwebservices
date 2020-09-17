const React = require('react')
const ShopifyContextProvider = require('../providers/ShopifyContextProvider').default
const Auth0Provider = require('../providers/Auth0Provider').default

const RootWrapper = ({ element }) => {
  return (
    <Auth0Provider>
      <ShopifyContextProvider>
        {element}
      </ShopifyContextProvider >
    </Auth0Provider>
  )

}

module.exports = RootWrapper