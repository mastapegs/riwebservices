import React, { useContext } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { IconButton, Badge } from '@material-ui/core'
import ShopifyContext from '../contexts/ShopifyContext'

const Component = () => {
  const { checkout } = useContext(ShopifyContext)
  return (
    <>
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
    </>
  )
}

export default Component
