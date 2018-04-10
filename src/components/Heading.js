import slug from 'slug'
import React, { createElement } from 'react'

export default ({ level, children, ...props }) => {
  switch (level) {
    case 2:
      const headingSlug = slug(children, { lower: true })

      return (
        <h2 {...props} id={headingSlug} className={`blog-post__heading ${props.className || ''}`.trim()}>
          <a href={`#${headingSlug}`} className='blog-post__heading-anchor' />
          {children}
        </h2>
      )

    default:
      return createElement(`h${level}`, props, children)
  }
}
