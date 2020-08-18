import React, { useState, useEffect } from 'react'
import { Fade } from '@material-ui/core'

const BlogPost = ({ pageContext }) => {
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    setFadeIn(true)
    return (() => {
      setFadeIn(false)
    })
  }, [fadeIn])
  useEffect(() => {
    console.log(pageContext)
  }, [pageContext])
  return (
    <>
      <Fade in={fadeIn}>
        <div>
          <h1>This is a blog post</h1>
          <p>{pageContext.id}</p>
        </div>
      </Fade>
    </>
  )
}

export default BlogPost