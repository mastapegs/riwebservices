import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Fade } from '@material-ui/core'

const BlogPost = ({ data, pageContext }) => {
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <>
      <Fade in={fadeIn}>
        <div>
          <h1>{data.prismicBlog.data.title.text}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.prismicBlog.data.post_body.html }} />
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