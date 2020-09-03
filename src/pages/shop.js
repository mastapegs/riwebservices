import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Fade,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { gql, useMutation } from '@apollo/client'
import shopifyClient from '../clients/shopifyClient'
import ShopifyContext from '../contexts/ShopifyContext'

const ADD_LINE = gql`
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

const EMPTY_CART = gql`
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

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
  },
  card: {
    height: '100%'
  },
  checkoutData: {
    overflow: 'scroll'
  }
}))

const ShopifyTest = ({ data }) => {
  const classes = useStyles()
  const [fadeIn, setFadeIn] = useState(false)

  const [addLine, {
    loading: addLineLoading,
    error: addLineError,
    data: addLineData,
  }] = useMutation(ADD_LINE, {
    client: shopifyClient,
  })

  const [emptyCart, {
    loading: emptyCartLoading,
    error: emptyCartError,
    data: emptyCartData,
  }] = useMutation(EMPTY_CART, {
    client: shopifyClient
  })

  const { checkout, setCheckout } = useContext(ShopifyContext)

  // Modal useEffect
  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])

  // addLine mutation useEffect
  useEffect(() => {
    if (addLineLoading) {
      console.log('addLineLoading')
    }
    if (addLineError) {
      console.log('addLineError')
    }
    if (addLineData) {
      console.log('addLineData')
      console.log(addLineData)
      setCheckout({
        ...addLineData.checkoutLineItemsAdd.checkout
      })
    }
  }, [addLineLoading, addLineError, addLineData])

  // emptyCart mutation useEffect
  useEffect(() => {
    if (emptyCartLoading) console.log('emptyCartLoading')
    if (emptyCartError) console.log('emptyCartError')
    if (emptyCartData) {
      console.log(emptyCartData)
      setCheckout({
        ...emptyCartData.checkoutLineItemsReplace.checkout
      })
    }
  }, [emptyCartLoading, emptyCartError, empty])

  return (
    <>
      <Fade in={fadeIn}>
        <div>
          <Container>
            <Grid alignItems='stretch' container className={classes.gridContainer} spacing={2}>
              {((data) => {
                const products = data.allShopifyProduct.edges
                return (
                  products.map(({ node }) => {
                    const {
                      shopifyId,
                      title,
                      description,
                      variants
                    } = node
                    return (
                      <Grid key={shopifyId} item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardContent>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>${parseInt(variants[0].price).toFixed(2)}</p>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant='contained'
                              color='primary'
                              onClick={() => {
                                console.log(
                                  `Product: ${title} added to cart.\n` +
                                  `Variant ID: ${variants[0].shopifyId}`
                                );
                                (async () => {
                                  await addLine({
                                    variables: {
                                      id: checkout.id,
                                      variantID: variants[0].shopifyId,
                                      quantity: 1,
                                    }
                                  })
                                })()
                              }}
                            >
                              {'Add to Cart'}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  })
                )
              })(data)}
            </Grid>
          </Container>
        </div>
      </Fade>
      <Container>
        <pre className={classes.checkoutData}>{JSON.stringify(checkout, null, 2)}</pre>
        <Paper>
          <Container>
            <p>This checkout button leads to Shopify's Test Payment Gateway</p>
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                window.open(checkout.webUrl)
              }}
            >
              {'Checkout'}
            </Button>
            <Button
              color='secondary'
              variant='contained'
              onClick={() => {
                (async () => {
                  await emptyCart({
                    variables: {
                      id: checkout.id
                    }
                  })
                  return
                })()
              }}
            >
              {'Empty Cart'}
            </Button>
          </Container>
        </Paper>
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
        shopifyId
        variants {
          shopifyId
          price
        }
      }
    }
  }
}
`