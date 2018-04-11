import slug from 'slug'
import React from 'react'

export default ({ level, children, ...props }) => {
  const headingSlug = slug(children, { lower: true })
  const Heading = `h${level}`

  return (
    <Heading {...props} id={headingSlug} className={`blog-post__heading ${props.className || ''}`.trim()}>
      <a
        href={`#${headingSlug}`}
        className='blog-post__heading-anchor'
        title='Jump to this section'
        aria-hidden
      />

      {children}
    </Heading>
  )
}
