import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import { makeStyles } from '@material-ui/core/styles'
import CheckoutIcon from './CheckoutIcon'

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
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <LanguageIcon className={classes.icon} />
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            RI Web Services
          </Typography>
          <CheckoutIcon />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
