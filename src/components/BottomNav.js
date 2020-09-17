import React, { useEffect, useContext } from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import CreateIcon from '@material-ui/icons/Create'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ShopifyContext from '../contexts/ShopifyContext'

export default function SimpleBottomNavigation() {
  const location = useLocation()
  const getPathname = (location) => {
    if (location.pathname !== null) return location.pathname
    return null
  }
  const [activeLink, setActiveLink] = React.useState(getPathname(location))
  const { checkout } = useContext(ShopifyContext)

  useEffect(() => {
    switch (location?.pathname) {
      case '/':
        setActiveLink('home')
        break
      case '/pricing':
      case '/pricing/':
        setActiveLink('pricing')
        break
      case '/contact':
      case '/contact/':
        setActiveLink('contact')
        break
      case '/blog':
      case '/blog/':
        setActiveLink('blog')
        break
      case '/shop':
      case '/shop/':
        setActiveLink('shop')
        break
      case '/auth-test':
      case '/auth-test/':
        setActiveLink('auth')
        break
      default:
        setActiveLink('')
    }
  }, [location])

  return (
    <BottomNavigation
      value={activeLink}
      onChange={(event, newActiveLink) => {
        setActiveLink(newActiveLink)
        switch (newActiveLink) {
          case 'home':
            navigate('/')
            break
          case 'pricing':
            navigate('/pricing')
            break
          case 'contact':
            navigate('/contact')
            break
          case 'blog':
            navigate('/blog')
            break
          case 'shop':
            navigate('/shop')
            break
          case 'auth':
            navigate('/auth-test')
            break
          default:
        }
      }}
      showLabels
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <BottomNavigationAction value={'home'} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction value={'pricing'} label="Pricing" icon={<AttachMoneyIcon />} />
      <BottomNavigationAction value={'contact'} label="Contact" icon={<ContactMailIcon />} />
      <BottomNavigationAction value={'blog'} label="Blog" icon={<CreateIcon />} />
      <BottomNavigationAction value={'shop'} label="Shop" icon={<AddShoppingCartIcon />} />
      <BottomNavigationAction value={'auth'} label="Auth" icon={<AddShoppingCartIcon />} />
    </BottomNavigation>
  );
}