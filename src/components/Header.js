import React from 'react'
import { Link } from 'gatsby'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import { makeStyles } from '@material-ui/core/styles'

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
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <LanguageIcon className={classes.icon} />
          <Link className={classes.brand} to='/'>
            <Typography variant="h6" color="inherit" noWrap>
              RI Web Services
            </Typography>
          </Link>
          <div>
            <Link to='/pricing' className={classes.links}>
              <Typography variant="h6" color="inherit" noWrap>
                Pricing
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
