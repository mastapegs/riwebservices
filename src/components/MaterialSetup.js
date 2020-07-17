import React from 'react'
import { Helmet } from 'react-helmet'
import { CssBaseline } from '@material-ui/core'

const MaterialSetup = () => {
  return (
    <>
      <CssBaseline />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
    </>
  )
}

export default MaterialSetup