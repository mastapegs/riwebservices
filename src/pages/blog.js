import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
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
                  <Paper className={classes.blogItem}>
                    <strong>{edge.node.data.seo_title.text}</strong> - {edge.node.data.seo_description.text}
                  </Paper>
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