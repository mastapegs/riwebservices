import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Fade, Grid,
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactTable />
            </Grid>
          </Grid>
        </div>
      </Fade>

    </>
  )
}

export default Contact
