import slug from 'slug'
import React, { createElement } from 'react'

export default ({ level, children, ...props }) => {
  if (level === 2) {
    const headingSlug = slug(children, { lower: true })

    return (
      <h2 {...props} id={headingSlug} className={`blog-post__heading ${props.className || ''}`.trim()}>
        <a
          href={`#${headingSlug}`}
          className='blog-post__heading-anchor'
          title='Jump to this section'
          aria-hidden
        />

        {children}
      </h2>
    )
  }

  return createElement(`h${level}`, props, children)
}
