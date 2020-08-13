import React, { useEffect } from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function SimpleBottomNavigation() {
  const location = useLocation()
  const [activeLink, setActiveLink] = React.useState('home');

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
      default:
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
    </BottomNavigation>
  );
}