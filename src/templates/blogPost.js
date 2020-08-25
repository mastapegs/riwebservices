import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import {
  Fade,
  Container,
} from '@material-ui/core'
import SliceZone from '../components/SliceZone'
import SEO from '../components/SEO'

const BlogPost = ({ data, pageContext }) => {
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
        title={data.prismicBlog.data.seo_title.text}
        description={data.prismicBlog.data.seo_description.text}
      />
      <Fade in={fadeIn}>
        <div>
          <Container>
            <h1>{data.prismicBlog.data.title.text}</h1>
            <SliceZone slices={data.prismicBlog.data.body} />
          </Container>
        </div>
      </Fade>
    </>
  )
}

export default BlogPost

export const query = graphql`
query BlogPostQuery($uid: String) {
  prismicBlog(uid: {eq: $uid}) {
    data {
      title {
        text
      }
      seo_title {
        text
      }
      seo_description {
        text
      }
      body {
        ... on PrismicBlogBodyText {
          id
          primary {
            text {
              html
            }
          }
          slice_type
        }
      }
    }
  }
}
`