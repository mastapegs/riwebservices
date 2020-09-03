import React, { useEffect, useContext } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'
import shopifyClient from '../clients/shopifyClient'
import { useLazyQuery, useMutation } from '@apollo/client'
import {
  CREATE_CHECKOUT,
  GET_CHECKOUT,
} from '../queries/shopifyCartQueries'

const ShopifyCheckoutInit = () => {
  const { checkout,
    setCheckout,
    checkCheckoutComplete,
    setCheckCheckoutComplete,
  } = useContext(ShopifyContext)

  const [getCheckout, {
    loading: getCheckoutLoading,
    data: getCheckoutData,
    error: getCheckoutError
  }] = useLazyQuery(GET_CHECKOUT, {
    client: shopifyClient,
    errorPolicy: 'all',
  })

  const [createCheckout, {
    loading: createCheckoutLoading,
    data: createCheckoutData,
    error: createCheckoutError,
  }] = useMutation(CREATE_CHECKOUT, {
    client: shopifyClient,
    errorPolicy: 'all',
  })

  // Main triggering onload useEffect
  useEffect(() => {
    // Get the localStorage checkoutID
    // ID will either be null, or have a checkout.id value
    let localCheckoutID = window.localStorage.getItem('checkoutID')
    if (!localCheckoutID) {
      // localStorage checkoutID is null
      // create a new checkout using createCheckout mutation
      (async () => {
        await createCheckout()
      })()
    } else {
      // localStorage checkoutID has a value
      // verify checkoutID for validity using checkout mutation
      // if good ID, setCheckout state, else create new checkout, then set state
      (async () => {
        await getCheckout({
          variables: {
            id: localCheckoutID
          }
        })
      })()
    }
  }, [])

  // createCheckout mutation effect
  useEffect(() => {
    if (createCheckoutLoading) {
      // Loading
    }
    if (createCheckoutError) {
      // Handle Error
    }
    if (createCheckoutData) {
      window.localStorage.setItem('checkoutID', createCheckoutData.checkoutCreate.checkout.id)
      setCheckout({
        ...createCheckoutData.checkoutCreate.checkout
      })
    }
  }, [createCheckoutLoading, createCheckoutData, createCheckoutError])

  // getCheckout query effect
  useEffect(() => {
    console.log('inside getCheckout')
    if (getCheckoutLoading) {
      // Handle Loading
      console.log('getCheckoutLoading')
    }
    if (getCheckoutError) {
      (async () => {
        await createCheckout()
      })()
      // Handle error
    }
    if (getCheckoutData) {
      console.log('getCheckoutData')
      setCheckout({
        ...getCheckoutData.node
      })
    }
  }, [getCheckoutLoading, getCheckoutData, getCheckoutError])

  // setCheckout effect
  useEffect(() => {
    console.log('Checkout:')
    console.log(checkout)
  }, [checkout])

  //
  useEffect(() => {
    if (checkCheckoutComplete) {
      console.log('need to check if checkout is complete')
    }
  }, [checkCheckoutComplete])

  return (
    <>

    </>
  )
}

export default ShopifyCheckoutInit
