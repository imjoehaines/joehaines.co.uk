const fs = require('fs')
const path = require('path')
const slug = require('slug')
const frontMatter = require('front-matter')
const readingTime = require('reading-time')

module.exports = root =>
  fs.readdirSync(path.join(root, 'posts')).reverse().map(filename => {
    const contents = fs.readFileSync(path.join(root, 'posts', filename)).toString()
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
