import React, { useEffect, useContext } from 'react'
import ShopifyContext from '../contexts/ShopifyContext'
import shopifyClient from '../clients/shopifyClient'
import { gql, useLazyQuery, useMutation } from '@apollo/client'

const CREATE_CHECKOUT = gql`
  mutation CreateCheckout {
    checkoutCreate(input: {}) {
      checkout {
        id
        webUrl
      }
    }
  }
`

const GET_CHECKOUT = gql`
  query($id: ID!) {
    node(id: $id) {
      id
      ... on Checkout {
        id
        webUrl
      }
    }
  }
`

const ShopifyCheckoutInit = () => {
  const { checkout, setCheckout } = useContext(ShopifyContext)
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
  }, [createCheckout, getCheckout])

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
    if (getCheckoutLoading) {
      // Handle Loading
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

  return (
    <>

    </>
  )
}

export default ShopifyCheckoutInit
