import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ContactTable from '../components/contactTable'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  formContent: {
    padding: theme.spacing(8, 0, 6),
  },
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.heroContent}>
        <ContactTable />
      </div>
      <div className={classes.formContent}>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
