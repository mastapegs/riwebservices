import React, { useState } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyContextProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(null)
  const [checkCheckoutComplete, setCheckCheckoutComplete] = useState(false)
  const [checkCheckoutTimer, setCheckCheckoutTimer] = useState(null)

  return (
    <>
      <ShopifyContext.Provider value={{
        checkout,
        setCheckout,
        checkCheckoutComplete,
        setCheckCheckoutComplete,
        checkCheckoutTimer,
        setCheckCheckoutTimer,
      }}>
        {children}
      </ShopifyContext.Provider>
    </>
  )
}

export default ShopifyContextProvider