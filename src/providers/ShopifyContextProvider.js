import React, { useState } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyContextProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <ShopifyContext.Provider value={{
        checkout,
        setCheckout,
        cartOpen,
        setCartOpen,
      }}>
        {children}
      </ShopifyContext.Provider>
    </>
  )
}

export default ShopifyContextProvider