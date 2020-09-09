import React, { useState, useEffect, useContext } from 'react'
import { useMutation } from '@apollo/client'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import {
  IconButton,
  Badge,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Card,
  DialogContent,
  DialogActions,
} from '@material-ui/core'
import ShopifyContext from '../contexts/ShopifyContext'
import { makeStyles } from '@material-ui/core/styles'
import shopifyClient from '../clients/shopifyClient'
import { EMPTY_CART } from '../queries/shopifyCartQueries'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    fontWeight: "bold"
  },
  pictureTag: {
    height: '100%',
    width: '100%'
  },
}))

const Component = () => {
  const [open, setOpen] = useState(false)
  const { checkout, setCheckout } = useContext(ShopifyContext)
  const classes = useStyles()

  const [emptyCart, {
    loading: emptyCartLoading,
    error: emptyCartError,
    data: emptyCartData,
  }] = useMutation(EMPTY_CART, {
    client: shopifyClient
  })

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

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <IconButton color='inherit' onClick={handleClickOpen}>
        <Badge badgeContent={(() => {
          if (!checkout) return 0
          let sum = 0
          checkout.lineItems.edges.forEach(({ node }) => {
            sum += node.quantity
          })
          return sum
        })()} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Shopping Cart</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {checkout?.lineItems.edges.map(({ node: { id, quantity, title, variant: { image: { src } } } }) => (
              <Grid container item spacing={3} xs={12} key={id}>
                <Grid item xs={6}>
                  <Card className={classes.card}>
                    <div>
                      <p className={classes.productTitle}>{`${title}`}</p>
                      <p>{`Quantity: ${quantity}`}</p>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <img className={classes.pictureTag} src={src} alt={title} />
                </Grid>
              </Grid>
            ))}

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color='primary'
            variant='contained'
            onClick={() => window.open(checkout.webUrl)}
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
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Component
