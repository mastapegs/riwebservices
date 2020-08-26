import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'

const ShopifyTest = ({ data }) => {
  return (
    <>
      <Container>
        {((data) => {
          const products = data.allShopifyProduct.edges
          return (
            products.map(({ node }) => {
              const {
                id,
                title,
                description,
                priceRange: {
                  minVariantPrice: {
                    amount: price
                  }
                }
              } = node
              return (
                <div key={id}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>${parseInt(price).toFixed(2)}</p>
                </div>
              )
            })
          )
        })(data)}
      </Container>
    </>
  )
}

export default ShopifyTest

export const query = graphql`
  query allProducts {
  allShopifyProduct {
    edges {
      node {
        title
        description
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        id
      }
    }
  }
}
`