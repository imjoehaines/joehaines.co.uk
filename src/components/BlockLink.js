import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
  color: rgb(0, 127, 173);
  text-decoration-color: rgba(0, 127, 173, .5);
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: rgb(0, 94, 128);
    text-decoration-color: rgba(0, 94, 128, .5);
  }
`
