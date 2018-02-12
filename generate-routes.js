const fs = require('fs')
const path = require('path')
const slug = require('slug')
const frontMatter = require('front-matter')
const updateJsonFile = require('update-json-file')

const slugs = fs.readdirSync(path.join(__dirname, 'src', 'posts')).reverse().map(filename => {
  const contents = fs.readFileSync(path.join(__dirname, 'src', 'posts', filename)).toString()
  const { attributes: { title } } = frontMatter(contents)

  return '/' + slug(title, { lower: true })
})

updateJsonFile(path.join(__dirname, 'package.json'), data => {
  data.x0.routes = [...new Set(data.x0.routes.concat(slugs))] // use Set to get a unique list of routes

  return data
})
