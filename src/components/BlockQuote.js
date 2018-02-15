import React from 'react'

export default ({ children }) => {
  // grab the text content of the last line of content to use as citation
  const cite = children.pop().props.children

  // if we got a citation but there are no children left then the citation is
  // actually the text content and there is no citation
  if (cite && !children.length) {
    return <blockquote>{cite}</blockquote>
  }

  return (
    <blockquote cite={cite}>
      {children}

      <p className='align-right'>
        <small>
          <cite>{cite}</cite>
        </small>
      </p>
    </blockquote>
  )
}
