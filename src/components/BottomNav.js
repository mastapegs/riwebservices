import React from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
  links: {
    color: 'inherit',
    textDecoration: 'none'
  },
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        switch (newValue) {
          case 0:
            navigate('/')
            break
          case 1:
            navigate('/pricing')
            break
          case 2:
            break
          default:
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pricing" icon={<AttachMoneyIcon />} />
      <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
}