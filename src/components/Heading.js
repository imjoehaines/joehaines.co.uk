import slug from 'slug'
import React from 'react'
import hash from 'object-hash'

export default ({ level, children, ...props }) => {
  const headingSlug = typeof children === 'string'
    ? slug(children, { lower: true })
    : hash(children)

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
