import React from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Typography, Button, Container, Grid } from '@material-ui/core'
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

const Index = () => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>RI Web Services</title>
        <meta
          name="description"
          content="Fast and affordable websites and web applications in Rhode Island"
        />
      </Helmet>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            The Internet is Yours
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Make yourself seen and known with a beautiful and effective online web site.
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
    </>
  )
}

export default Index