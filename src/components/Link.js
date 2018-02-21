import React from 'react'

export default ({ href, children, ...props }) =>
  <a href={href} rel='noopener noreferrer' {...props}>
    {children}
  </a>
