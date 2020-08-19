import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  '@global': {
    img: {
      width: '100%'
    }
  },
})

const SliceZone = ({ slices }) => {
  const classes = useStyles()
  return (
    <>
      {slices.map(slice => {
        if (slice.__typename === "PrismicBlogBodyText") {
          return (
            <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
          )
        } else {
          return null
        }
      })}
    </>
  )
}

export default SliceZone
