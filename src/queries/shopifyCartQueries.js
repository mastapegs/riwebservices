import { gql } from '@apollo/client'

const CHECKOUT_FRAGMENT = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    orderStatusUrl
    lineItems(first: 100) {
      edges {
        node {
          id
          quantity
          title
          variant {
          image {
            src
          }
        }
        }
      }
    }
  }
`

export const CREATE_CHECKOUT = gql`
  mutation CreateCheckout {
    checkoutCreate(input: {}) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CHECKOUT_FRAGMENT}
`

export const GET_CHECKOUT = gql`
  query($id: ID!) {
    node(id: $id) {
      id
      ... on Checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CHECKOUT_FRAGMENT}
`

export const ADD_LINE = gql`
  mutation ($id: ID!, $variantID: ID!, $quantity: Int!) {
    checkoutLineItemsAdd(checkoutId: $id, lineItems: {quantity: $quantity, variantId: $variantID}) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CHECKOUT_FRAGMENT}
`

export const EMPTY_CART = gql`
  mutation ($id: ID!) {
    checkoutLineItemsReplace(checkoutId: $id, lineItems: []) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CHECKOUT_FRAGMENT}
`

export const CHECK_ORDER_STATUS = gql`
  query ($id: ID!) {
    node(id: $id) {
      ... on Checkout {
        orderStatusUrl
        id
      }
    }
  }
`