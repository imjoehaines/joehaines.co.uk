import React from 'react'
import styled from 'styled-components'

import Small from './Small'

const BlockQuote = styled.blockquote`
  margin: 1rem 2rem;
`

const Right = styled.p`
  text-align: right;
`

export default ({ children }) => {
  // grab the text content of the last line of content to use as citation
  const cite = children.pop().props.children

  return (
    <BlockQuote cite={cite}>
      {children}

      <Right>
        <Small>
          <cite>{cite}</cite>
        </Small>
      </Right>
    </BlockQuote>
  )
}
