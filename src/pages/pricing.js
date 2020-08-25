import React, { useState, useEffect } from 'react'
import { navigate, graphql } from 'gatsby'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  Button,
  CardActions,
  CardContent,
  Fade,
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarBorder'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import tiers from '../data/pricingTiers'
import SEO from '../components/SEO'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}))

const handlePricingLinks = event => {
  navigate('/contact')
}

const Services = ({ data }) => {
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
        title={'Pricing'}
        description={'Different web services to suit different needs'}
      />
      <Fade in={fadeIn}>
        <div>
          {/* Hero unit */}
          <Container maxWidth="sm" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {data.prismicPricing.data.page_title.text}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              {data.prismicPricing.data.page_description.text}
            </Typography>
          </Container>
          {/* End hero unit */}
          <Container maxWidth="md">
            <Grid container spacing={5} alignItems="flex-start">
              {tiers.map((tier) => (
                // E-Commerce card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'E-Commerce Web Application' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Website + Blog' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                      </div>
                      <div className={classes.cardPricing}>
                        <AddIcon />
                      </div>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.monthlyPrice}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mo
                    </Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        color="primary"
                        onClick={(event) => handlePricingLinks(event)}
                      >
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Fade>
    </>
  )
}

export default Services

export const query = graphql`
query MyQuery {
  prismicPricing {
    id
    data {
      page_description {
        text
      }
      page_title {
        text
      }
    }
  }
}
`