import React, { useState } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyContextProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(null)
  const [checkCheckoutComplete, setCheckCheckoutComplete] = useState(false)

  return (
    <>
      <ShopifyContext.Provider value={{
        checkout,
        setCheckout,
      }}>
        {children}
      </ShopifyContext.Provider>
    </>
  )
}

export default ShopifyContextProvider