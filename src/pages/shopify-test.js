import React, { useState, useEffect } from 'react'
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

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
  },
  card: {
    height: '100%'
  },
}))

const ShopifyTest = ({ data }) => {
  const classes = useStyles()
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])

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
                      id,
                      title,
                      description,
                      priceRange: {
                        minVariantPrice: {
                          amount: price
                        }
                      },
                      variants
                    } = node
                    return (
                      <Grid key={id} item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardContent>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>${parseInt(price).toFixed(2)}</p>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant='contained'
                              color='primary'
                              onClick={() => {
                                console.log(
                                  `Product: ${title} added to cart.\n` +
                                  `Variant ID: ${variants[0].id}`
                                )
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
        variants {
          id
        }
      }
    }
  }
}
`