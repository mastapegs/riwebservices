import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  Button,
  CardActions,
  CardContent
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarBorder'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
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

const tiers = [
  {
    title: 'Multi-Page Website w/ Contact Form',
    price: '1000',
    monthlyPrice: '30',
    description: [
      'Multiple Pages',
      'Offline Capability',
      'Contact Form linked to your Email and Phone',
    ],
    buttonText: 'Make yourself seen',
    buttonVariant: 'outlined',
  },
  {
    title: 'Website + Blog',
    subheader: 'Most popular',
    price: '3000',
    monthlyPrice: '50',
    description: [
      'Everything included in a Multi-Page Site w/ Contact Form',
      'A blog (or more than one!) with the ability to make as many new posts as you\'d like',
      'Make your website editable for the whole team',
    ],
    buttonText: 'Stand out amongst the crowd',
    buttonVariant: 'contained',
  },
  {
    title: 'E-Commerce Web Application',
    price: '5000',
    monthlyPrice: '100',
    description: [
      'Everything included in a Website + Blog',
      'Shopify Integration',
      'Sell your products and services to customers online',
      'Create a dropshipping service and sell branded merchandise',
    ],
    buttonText: 'Take your business to the next level',
    buttonVariant: 'outlined',
  },
];

const Services = () => {
  const classes = useStyles()
  return (
    <>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Custom Web Solutions
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          A solution tailored to maximizing your business's growth potential.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
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
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Services
