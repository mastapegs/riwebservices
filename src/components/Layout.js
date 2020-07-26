import React from 'react'
import MaterialSetup from './MaterialSetup'
import Header from './Header'
import BottomNav from './BottomNav'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  main: {
    marginBottom: theme.spacing(10)
  }
}))

const Layout = ({ children: page }) => {
  const classes = useStyles()
  return (
    <>
      <MaterialSetup />
      <Header />
      <main className={classes.main}>
        {page}
      </main>
      <BottomNav />
    </>
  )
}

export default Layout