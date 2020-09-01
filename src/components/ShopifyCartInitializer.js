import React, { useEffect, useContext } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'

const ShopifyCartInitializer = () => {
  const { checkoutID, setCheckoutID } = useContext(ShopifyContext)
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

    </>
  )
}

export default ShopifyCartInitializer
