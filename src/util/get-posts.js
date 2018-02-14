import fs from 'fs'
import path from 'path'
import slug from 'slug'
import frontMatter from 'front-matter'

export default root =>
  fs.readdirSync(path.join(root, 'posts')).reverse().map(filename => {
    const contents = fs.readFileSync(path.join(root, 'posts', filename)).toString()
    const { attributes: { title, description }, body } = frontMatter(contents)

    return {
      title,
      description,
      date: new Date(path.basename(filename, '.md')),
      body,
      slug: slug(title, { lower: true })
    }
  })
