import React from 'react'
import Header from './Header'
import BottomNav from './BottomNav'
import { makeStyles } from '@material-ui/core/styles'
import ShopifyCheckoutInit from './ShopifyCheckoutInit'
import Cart from '../components/Cart'

const useStyles = makeStyles(theme => ({
  main: {
    margin: theme.spacing(10, 0)
  }
}))

const Layout = ({ children: page }) => {
  const classes = useStyles()
  return (
    <>
      <ShopifyCheckoutInit />
      <Header />
      <main className={classes.main}>
        {page}
      </main>
      <BottomNav />
      <Cart />
    </>
  )
}

export default Layout