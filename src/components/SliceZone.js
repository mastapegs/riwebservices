import React from 'react'

const SliceZone = ({ slices }) => {
  return (
    <>
      {slices.map(slice => {
        if (slice.__typename === "PrismicBlogBodyText") {
          return (
            <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
          )
        }
      })}
    </>
  )
}

export default SliceZone
