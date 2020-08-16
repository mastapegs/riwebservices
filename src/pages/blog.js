import React, { useState, useEffect } from 'react'
import { Typography, Fade } from '@material-ui/core'

const Blog = () => {
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
          <Typography>
            {'Blog'}
          </Typography>
        </div>
      </Fade>

    </>
  )
}

export default Blog
