import fs from 'fs'
import path from 'path'
import slug from 'slug'
import frontMatter from 'front-matter'

export default directory =>
  fs.readdirSync(directory).reverse().map(filename => {
    const contents = fs.readFileSync(path.join(directory, filename)).toString()
    const { attributes: { title, description, excludeFromFeed }, body } = frontMatter(contents)

    return {
      title,
      description,
      excludeFromFeed: excludeFromFeed === true,
      date: new Date(path.basename(filename, '.md')),
      body,
      slug: slug(title, { lower: true })
    }
  })
