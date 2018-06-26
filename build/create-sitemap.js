import fs from 'fs'
import path from 'path'
import generateSitemap from 'sitemap-static'

export default publicDirectory => {
  const writer = fs.createWriteStream(path.join(publicDirectory, 'sitemap.xml'))

  generateSitemap(writer, {
    findRoot: publicDirectory,
    prefix: 'https://www.joehaines.co.uk/',
    pretty: true
  })
}
