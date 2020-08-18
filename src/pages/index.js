import React, { useEffect, useState } from 'react'
import { navigate, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  Typography,
  Button,
  Container,
  Grid,
  Fade,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const handleCallToAction = (event) => {
  navigate('/contact')
}

const Index = ({ data }) => {
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
      <Helmet>
        <title>Home | RI Web Services</title>
        <meta
          name="description"
          content="Fast and affordable websites and web applications in Rhode Island"
        />
      </Helmet>
      <Fade in={fadeIn}>
        <div>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {data.prismicHome.data.call_to_action.text}
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {data.prismicHome.data.call_to_action_text.text}
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(event) => handleCallToAction(event)}
                    >
                      {"Let's Talk"}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Index

export const query = graphql`
query indexQuery {
  prismicHome(uid: {eq: "index"}) {
    id
    data {
      call_to_action {
        text
      }
      call_to_action_text {
        text
      }
    }
  }
}

`