import path from 'path'
import React from 'react'
import imageSize from 'image-size'

const classMap = new Map([
  [0, 'image--small'],
  [500, 'image--medium'],
  [1000, 'image--large'],
  [2000, 'image--fullwidth']
])

export default ({ src, alt, title }) => {
  const imageFile = path.join(__dirname, '..', '..', 'public', src)
  const { width } = imageSize(imageFile)

  // round the width down to multiples of 500 so we don't stretch images
  // use Math.min to clamp everything above 2000 to 2000
  const roundedWidth = Math.min(Math.floor(width / 500) * 500, 2000)

  return <img src={src} alt={alt} title={title} className={classMap.get(roundedWidth)} />
}
