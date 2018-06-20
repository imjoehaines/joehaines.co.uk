import fs from 'fs'
import path from 'path'
import slug from 'slug'
import frontMatter from 'front-matter'
import readingTime from 'reading-time'

module.exports = directory =>
  fs.readdirSync(directory).reverse().map(filename => {
    const contents = fs.readFileSync(path.join(directory, filename)).toString()
    const { attributes: { title, description }, body } = frontMatter(contents)

    return {
      title,
      description,
      date: new Date(path.basename(filename, '.md')),
      readingTime: readingTime(body).minutes,
      body,
      slug: slug(title, { lower: true })
    }
  })
