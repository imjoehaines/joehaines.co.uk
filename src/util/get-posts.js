const fs = require('fs')
const path = require('path')
const slug = require('slug')
const frontMatter = require('front-matter')

module.exports = root =>
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
