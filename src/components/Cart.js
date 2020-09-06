import React, { useEffect, useContext } from 'react'
import {
  Slide,
  Container,
  Button,
  Paper,
} from '@material-ui/core'
import ShopifyContext from '../contexts/ShopifyContext'
import {
  EMPTY_CART
} from '../queries/shopifyCartQueries'
import { makeStyles } from '@material-ui/core/styles'
import { useMutation } from '@apollo/client'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import shopifyClient from '../clients/shopifyClient'

const useStyles = makeStyles(theme => ({
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

const Cart = () => {
  const { checkout, setCheckout, cartOpen, setCartOpen } = useContext(ShopifyContext)
  const classes = useStyles()

  const [emptyCart, {
    loading: emptyCartLoading,
    error: emptyCartError,
    data: emptyCartData,
  }] = useMutation(EMPTY_CART, {
    client: shopifyClient
  })

  // emptyCart mutation useEffect
  useEffect(() => {
    if (emptyCartLoading) console.log('emptyCartLoading')
    if (emptyCartError) {
      // Checkout already completed
      console.log('emptyCartError')
      console.log(emptyCartError)
    }
    if (emptyCartData) {
      console.log(emptyCartData)
      setCheckout({
        ...emptyCartData.checkoutLineItemsReplace.checkout
      })
    }
  }, [emptyCartLoading, emptyCartError, emptyCartData])

  return (
    <>
      <Slide
        direction='right'
        in={cartOpen}
        mountOnEnter
        unmountOnExit
      >
        {/* Shopping Cart Data for testing visibility */}
        <Container>
          <pre className={classes.checkoutData}>{JSON.stringify(checkout, null, 2)}</pre>
          <Paper className={classes.checkoutPaper}>
            <Container>
              <p>This checkout button leads to Shopify's Test Payment Gateway</p>
              <Button
                color='primary'
                variant='contained'
                onClick={() => window.open(checkout.webUrl)}
                className={classes.checkoutButton}
              >
                {'Checkout'}
              </Button>
              <Button
                startIcon={<RemoveShoppingCartIcon />}
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
      </Slide>
    </>
  )
}

export default Cart
