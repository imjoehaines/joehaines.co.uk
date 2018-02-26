const path = require('path')
const rimraf = require('rimraf')
const copyDirectory = require('copy-dir')
const updateJsonFile = require('update-json-file')

const getPosts = require('./src/util/get-posts')

// cleanup the exiting public directory
require('./package.json').x0.routes
  .filter(slug => slug !== '/')
  .filter(slug => slug !== '/404')
  .map(slug => slug.replace('/', ''))
  .forEach(slug => rimraf(
    path.join(__dirname, 'public', slug),
    err => { if (err) throw err }
  ))

const slugs = getPosts(path.join(__dirname, 'src')).map(({ slug }) => `/${slug}`)

updateJsonFile(path.join(__dirname, 'package.json'), data => {
  // always add the home and 404 pages!
  data.x0.routes = ['/', '/404'].concat(slugs)

  return data
}, { indent: 2 })

rimraf.sync(path.join(__dirname, 'public', 'images', '*'))

copyDirectory.sync(
  path.join(__dirname, 'src', 'assets', 'images'),
  path.join(__dirname, 'public', 'images')
)
