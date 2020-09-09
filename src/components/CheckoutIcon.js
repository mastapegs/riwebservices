import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
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

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(0, 2)
  },
  productTitle: {
    fontWeight: "bold"
  }
}))

const Component = () => {
  const [open, setOpen] = useState(false)
  const { checkout } = useContext(ShopifyContext)
  const classes = useStyles()
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
            {checkout?.lineItems.edges.map(({ node: { id, quantity, title } }) => (
              <Grid item xs={12} key={id}>
                <Card className={classes.card}>
                  <p className={classes.productTitle}>{`${title}`}</p>
                  <p>{`Quantity: ${quantity}`}</p>
                </Card>
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
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Component
