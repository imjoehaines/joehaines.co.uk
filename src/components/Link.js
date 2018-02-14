import styled from 'styled-components'

export default styled.a`
  color: rgb(0, 127, 173);
  text-decoration-skip: ink;
  text-decoration-color: rgba(0, 127, 173, .5);

  &:hover,
  &:focus {
    color: rgb(0, 94, 128);
    text-decoration-color: rgba(0, 94, 128, .5);
  }
`
