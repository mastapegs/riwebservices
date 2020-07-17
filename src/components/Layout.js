import React from 'react'
import MaterialSetup from './MaterialSetup'

const Layout = ({ children: page }) => {
  return (
    <>
      <MaterialSetup />
      {page}
    </>
  )
}

export default Layout