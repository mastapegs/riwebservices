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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMutation } from '@apollo/client'
import shopifyClient from '../clients/shopifyClient'
import ShopifyContext from '../contexts/ShopifyContext'
import {
  ADD_LINE,
} from '../queries/shopifyCartQueries'

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
  },
  checkoutPaper: {
    padding: theme.spacing(1, 0)
  },
  checkoutButton: {
    marginRight: theme.spacing(1)
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

  const {
    checkout,
    setCheckout
  } = useContext(ShopifyContext)

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
                      descriptionHtml,
                      variants
                    } = node
                    return (
                      <Grid key={shopifyId} item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardContent>
                            <h2>{title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
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
        descriptionHtml
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
