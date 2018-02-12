import React from 'react'
import styled from 'styled-components'

import Small from './Small'

const Footer = styled.footer`
  margin-top: 4rem;
`

export default _ =>
  <Footer>
    <Small>
      &copy; {(new Date()).getFullYear()} Joe Haines
    </Small>
  </Footer>
