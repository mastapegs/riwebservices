import React from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import ContactTable from '../components/ContactTable'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  formContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>Contact Me | RI Web Services</title>
        <meta
          name="description"
          content="Contact me and let's talk about your web presence."
        />
      </Helmet>
      <div className={classes.formContent}>
        <ContactForm />
      </div>
      <div className={classes.heroContent}>
        <ContactTable />
      </div>
    </>
  )
}

export default Contact
