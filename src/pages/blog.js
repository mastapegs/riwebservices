import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import {
  Typography,
  Fade,
  Grid,
  Paper,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  blogItem: {
    padding: theme.spacing(2)
  },
  links: {
    textDecoration: 'inherit',
    color: 'inherit'
  }
}))

const Blog = ({ data }) => {
  const [fadeIn, setFadeIn] = useState(false)
  const classes = useStyles()
  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])
  return (
    <>
      <Fade in={fadeIn}>
        <div>
          <Container>
            <Typography variant='h2' component='h1' gutterBottom>
              {'Blog Posts'}
            </Typography>
            <Grid container spacing={2}>
              {data.allPrismicBlog.edges.map(edge => (
                <Grid item key={edge.node.uid}>
                  <Link className={classes.links} to={`/blog/${edge.node.uid}`}>
                    <Paper className={classes.blogItem}>
                      <strong>{edge.node.data.seo_title.text}</strong> - {edge.node.data.seo_description.text}
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Fade>
    </>
  )
}

export default Blog

export const query = graphql`
query AllPrismicBlogPosts {
  allPrismicBlog {
    edges {
      node {
        data {
          seo_title {
            text
          }
          seo_description {
            text
          }
        }
        uid
      }
    }
  }
}
`