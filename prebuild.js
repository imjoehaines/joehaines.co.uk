const path = require('path')
const rimraf = require('rimraf')
const updateJsonFile = require('update-json-file')

const getPosts = require('./src/util/get-posts')

// cleanup the exiting public directory
require('./package.json').x0.routes
  .filter(slug => slug !== '/')
  .map(slug => slug.replace('/', ''))
  .forEach(slug => rimraf(
    path.join(__dirname, 'public', slug),
    err => { if (err) throw err }
  ))

const slugs = getPosts(path.join(__dirname, 'src')).map(({ slug }) => `/${slug}`)

updateJsonFile(path.join(__dirname, 'package.json'), data => {
  // always add the home page!
  data.x0.routes = ['/'].concat(slugs)

  return data
}, { indent: 2 })
