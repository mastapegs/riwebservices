import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Fade,
} from '@material-ui/core'
import ContactTable from '../components/ContactTable'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

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
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])
  return (
    <>
      <SEO
        title={'Contact Me'}
        description={"Contact me and let's talk about your web presence."}
      />
      <Fade in={fadeIn}>
        <div>
          <div className={classes.formContent}>
            <ContactForm />
          </div>
          <div className={classes.heroContent}>
            <ContactTable />
          </div>
        </div>
      </Fade>

    </>
  )
}

export default Contact
