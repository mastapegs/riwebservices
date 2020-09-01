import React, { useState } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyContextProvider = ({ children }) => {
  const [checkoutID, setCheckoutID] = useState(null)
  return (
    <>
      <ShopifyContext.Provider value={{
        checkoutID,
        setCheckoutID,
        lineItems: [],
      }}>
        {children}
      </ShopifyContext.Provider>
    </>
  )
}

export default ShopifyContextProvider