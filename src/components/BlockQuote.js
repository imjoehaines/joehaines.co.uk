import React from 'react'

export default ({ children }) => {
  // grab the text content of the last line of content to use as citation
  const cite = children.pop().props.children

  return (
    <blockquote cite={cite}>
      {children}

      <small className='align-right'>
        <cite>{cite}</cite>
      </small>
    </blockquote>
  )
}
