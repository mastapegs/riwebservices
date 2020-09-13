const React = require('react')
const ShopifyContextProvider = require('../providers/ShopifyContextProvider').default

const RootWrapper = ({ element }) => {
  return (
    <ShopifyContextProvider>
      {element}
    </ShopifyContextProvider >
  )

}

module.exports = RootWrapper