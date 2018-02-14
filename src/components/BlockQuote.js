import React from 'react'
import styled from 'styled-components'

import Small from './Small'

const BlockQuote = styled.blockquote`
  margin: 1rem 2rem;
`

export default ({ children }) => {
  // grab the text content of the last line of content to use as citation
  const cite = children.pop().props.children.join('')

  return (
    <BlockQuote cite={cite}>
      {children}

      <p style={{ textAlign: 'right' }}>
        <Small>
          <cite>{cite}</cite>
        </Small>
      </p>
    </BlockQuote>
  )
}
