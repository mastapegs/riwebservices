import React, { useState, useEffect } from 'react'
import { Typography, Fade } from '@material-ui/core'

const Blog = ({ data }) => {
  const [fadeIn, setFadeIn] = useState(false)
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
          <Typography variant='h1'>
            {'Blog Posts'}
          </Typography>
          <ul>
            {data.allPrismicBlog.edges.map(edge => (
              <li><strong>{edge.node.data.seo_title.text}</strong> - {edge.node.data.seo_description.text}</li>
            ))}
          </ul>
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