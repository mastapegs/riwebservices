import { gql } from '@apollo/client'

export const CREATE_CHECKOUT = gql`
  mutation CreateCheckout {
    checkoutCreate(input: {}) {
      checkout {
        id
        webUrl
        lineItems(first: 100) {
          edges {
            node {
              id
              quantity
              title
            }
          }
        }
      }
    }
  }
`

export const GET_CHECKOUT = gql`
  query($id: ID!) {
    node(id: $id) {
      id
      ... on Checkout {
        id
        webUrl
        lineItems(first: 100) {
          edges {
            node {
              id
              quantity
              title
            }
          }
        }
      }
    }
  }
`

export const ADD_LINE = gql`
  mutation ($id: ID!, $variantID: ID!, $quantity: Int!) {
    checkoutLineItemsAdd(checkoutId: $id, lineItems: {quantity: $quantity, variantId: $variantID}) {
      checkout {
        id
        webUrl
        lineItems(first: 100) {
          edges {
            node {
              id
              quantity
              title
            }
          }
        }
      }
    }
  }
`

export const EMPTY_CART = gql`
  mutation ($id: ID!) {
    checkoutLineItemsReplace(checkoutId: $id, lineItems: []) {
      checkout {
        id
        webUrl
        lineItems(first: 100) {
          edges {
            node {
              id
              quantity
              title
            }
          }
        }
      }
    }
  }
`