import React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
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
  return (
    <>
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
                  }
                } = node
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card} key={id}>
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
                            console.log(`Product: ${title} added to cart.`)
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