import React, { useEffect } from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ContactMailIcon from '@material-ui/icons/ContactMail';

const links = {
  '/': 0,
  'pricing': 1,
  'contact': 2,
}

export default function SimpleBottomNavigation() {
  const location = useLocation()
  const [activeLink, setActiveLink] = React.useState(links[location?.pathname]);

  useEffect(() => {
    switch (location?.pathname) {
      case '/pricing':
      case '/pricing/':
        setActiveLink(links['pricing'])
        break
      case '/contact':
      case '/contact/':
        setActiveLink(links['contact'])
        break
      default:
        setActiveLink(links['/'])
    }
  }, [location])

  return (
    <BottomNavigation
      value={activeLink}
      onChange={(event, newActiveLink) => {
        setActiveLink(newActiveLink)
        switch (newActiveLink) {
          case 0:
            navigate('/')
            break
          case 1:
            navigate('/pricing')
            break
          case 2:
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
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pricing" icon={<AttachMoneyIcon />} />
      <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
}