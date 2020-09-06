import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import { makeStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShopifyContext from '../contexts/ShopifyContext'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  brand: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing(4),
  },
  links: {
    color: 'inherit',
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  const { checkout } = useContext(ShopifyContext)
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <LanguageIcon className={classes.icon} />
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            RI Web Services
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={(() => {
              if (!checkout) return
              let sum = 0
              checkout.lineItems.edges.forEach(({ node }) => {
                sum += node.quantity
              })
              return sum
            })()} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
