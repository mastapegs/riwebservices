import React, { useState, useEffect, useContext } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyContextProvider = ({ children }) => {
  const [checkoutID, setCheckoutID] = useState(null)
  useEffect(() => {
    let checkoutID = window.localStorage.getItem('checkout-id')
    if (!checkoutID) {
      // get a new checkout id via apollo graphql shopify endpoint
      checkoutID = 'test-id'
      window.localStorage.setItem('checkoutID', checkoutID)
    }
    setCheckoutID(checkoutID)
  }, [])
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