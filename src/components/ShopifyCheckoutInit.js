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
      checkoutUserErrors {
        code
        message
        field
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
  const [getCheckout, { loading: getCheckoutLoading, data: getCheckoutData, error: getCheckoutError }] = useLazyQuery(GET_CHECKOUT, { errorPolicy: 'all' })
  const [createCheckout, { data: createCheckoutData }] = useMutation(CREATE_CHECKOUT, {
    client: shopifyClient
  })

  useEffect(() => {
    // Get the localStorage checkoutID
    // ID will either be null, or have a checkout.id value
    let localCheckoutID = window.localStorage.getItem('checkoutID')
    if (!localCheckoutID) {
      // localStorage checkoutID is null
      // create a new checkout using createCheckout mutation
      (async () => {
        const { data: { checkoutCreate: { checkout: checkoutData } } } = await createCheckout()
        console.log(checkoutData)
        window.localStorage.setItem('checkoutID', checkoutData.id)
        setCheckout((prevState) => {
          return {
            ...prevState,
            ...checkoutData
          }
        })
      })()
    } else {
      // localStorage checkoutID has a value
      // verify checkoutID for validity using checkout mutation
      // if good ID, setCheckout state, else create new checkout, then set state
      console.log('inside else statement');
      console.log(localCheckoutID);
      (async () => {
        await getCheckout({
          variables: {
            id: localCheckoutID
          }
        })
      })()
    }
  }, [])

  useEffect(() => {
    if (getCheckoutLoading) {
      console.log('getCheckoutLoading')
      console.log(getCheckoutLoading)
    }
    if (getCheckoutError) {
      console.log('getCheckoutError')
      console.log(getCheckoutError)
      console.log(getCheckoutError.graphQLErrors)
      console.log(getCheckoutError.networkError)
    }
    if (getCheckoutData) {
      console.log('getCheckoutData')
      console.log(getCheckoutData)
    }
  }, [getCheckoutLoading, getCheckoutData, getCheckoutError])

  return (
    <>

    </>
  )
}

export default ShopifyCheckoutInit
