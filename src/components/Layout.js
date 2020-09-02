import React from 'react'
import Header from './Header'
import BottomNav from './BottomNav'
import { makeStyles } from '@material-ui/core/styles'
import ShopifyCheckoutInit from './ShopifyCheckoutInit'

const useStyles = makeStyles(theme => ({
  main: {
    marginBottom: theme.spacing(10)
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
    </>
  )
}

export default Layout