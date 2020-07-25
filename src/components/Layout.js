import React from 'react'
import MaterialSetup from './MaterialSetup'
import Header from './Header'

const Layout = ({ children: page }) => {
  return (
    <>
      <MaterialSetup />
      <Header />
      <main>
        {page}
      </main>
    </>
  )
}

export default Layout