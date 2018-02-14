import styled, { keyframes } from 'styled-components'

const wave = keyframes`
  0% {
    transform: rotate(-5deg);
  }

  50%, 100% {
    transform: rotate(5deg);
  }
`

export default styled.span`
  display: inline-block;
  animation: ${wave} 800ms ease-in-out infinite alternate;
  font-size: 80%;

  body:hover & {
    animation-play-state: paused;
  }
`
