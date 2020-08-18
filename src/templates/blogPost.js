import React, { useState, useEffect } from 'react'
import { Fade } from '@material-ui/core'

const BlogPost = () => {
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
          <h1>This is a blog post</h1>
        </div>
      </Fade>
    </>
  )
}

export default BlogPost