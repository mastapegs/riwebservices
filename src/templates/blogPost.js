import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  Fade,
  Container,
} from '@material-ui/core'

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
      <Helmet>
        <title>{`${data.prismicBlog.data.seo_title.text} | RI Web Services`}</title>
        <meta
          name="description"
          content={data.prismicBlog.data.seo_description.text}
        />
      </Helmet>
      <Fade in={fadeIn}>
        <div>
          <Container>
            <h1>{data.prismicBlog.data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.prismicBlog.data.post_body.html }} />
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
      post_body {
        html
      }
    }
  }
}
`