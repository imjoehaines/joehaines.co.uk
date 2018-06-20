// TODO delete this file, most of it is not required

const fs = require('fs')
const Feed = require('feed')
const glob = require('glob')
const path = require('path')
const util = require('util')
const remark = require('remark')
const rimraf = require('rimraf')
const cssnano = require('cssnano')
const postcss = require('postcss')
const posthtml = require('posthtml')
const remarkHtml = require('remark-html')
const cssnext = require('postcss-cssnext')
const notifier = require('node-notifier')
const postcssImport = require('postcss-import')
const generateSitemap = require('sitemap-static')
const extendAttributes = require('posthtml-extend-attrs')

const getPosts = require('../src/util/get-posts')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

;(async _ => {
  const processor = posthtml()
    .use(extendAttributes({ attrsTree: { html: { lang: 'en' } } }))

  // process every HTML file in `public`
  glob.sync(path.join(__dirname, 'public/**/*.html')).forEach(async file => {
    const { html } = await processor.process(await readFile(file))

    // ugly hack to remove an extra UTF-8 charset that x0 puts in for us :(
    writeFile(file, html.replace(/^<!DOCTYPE html><meta charset="utf-8">/, '<!DOCTYPE html>'))
  })

  const destinationFile = path.join(__dirname, 'public', 'style.min.css')
  const sourceFile = path.join(__dirname, 'src', 'assets', 'css', 'index.css')

  const { css } = await postcss()
    .use(postcssImport())
    .use(cssnext())
    .use(cssnano({ preset: 'advanced' }))
    .process(await readFile(sourceFile), {
      from: sourceFile,
      to: destinationFile
    }).catch(err => console.error(err))

  await writeFile(destinationFile, css)

  console.log('Generating sitemap...')

  const writer = fs.createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'))

  generateSitemap(writer, {
    findRoot: path.join(__dirname, 'public'),
    prefix: 'https://www.joehaines.co.uk/',
    pretty: true
  })

  writer.on('finish', _ => {
    console.log('Sitemap generated!')
  })

  // move the 404 page so Netlify can find it
  fs.renameSync(
    path.join(__dirname, 'public', '404', 'index.html'),
    path.join(__dirname, 'public', '404.html')
  )

  rimraf.sync(path.join(__dirname, 'public', '404'))
  rimraf.sync(path.join(__dirname, 'public', 'feed.xml'))
  rimraf.sync(path.join(__dirname, 'public', 'feed.json'))
  rimraf.sync(path.join(__dirname, 'public', 'feed.atom'))

  // create RSS feed

  const posts = getPosts(path.join(__dirname, '..', 'posts'))

  const updated = posts.reduce(
    (latestUpdate, post) => post.date > latestUpdate ? post.date : latestUpdate,
    new Date(2018, 0, 1)
  )

  const feed = new Feed({
    updated,
    title: 'Joe Haines',
    description: 'Software developer from the UK',
    id: 'https://www.joehaines.co.uk/',
    link: 'https://www.joehaines.co.uk/',
    image: 'https://www.joehaines.co.uk/favicon.png',
    favicon: 'https://www.joehaines.co.uk/favicon.png',
    copyright: '© 2018 Joe Haines',
    generator: 'Feed for Node.js',
    feedLinks: {
      json: 'http://joehaines.co.uk/feed.json',
      atom: 'http://joehaines.co.uk/feed.atom'
    },
    author: {
      name: 'Joe Haines',
      email: 'hello@joehaines.co.uk',
      link: 'https://www.joehaines.co.uk'
    }
  })

  posts.forEach(({ title, description, date, body, slug }) => {
    remark()
      .use(remarkHtml)
      .process(body, (err, { contents }) => {
        if (err) throw err

        feed.addItem(({
          title,
          description,
          date,
          content: contents,
          id: slug,
          link: `https://www.joehaines.co.uk/${slug}`,
          author: [{
            name: 'Joe Haines',
            email: 'hello@joehaines.co.uk',
            link: 'https://www.joehaines.co.uk'
          }]
        }))
      })
  })

  const xmlFeed = writeFile(
    path.join(__dirname, 'public', 'feed.xml'),
    feed.rss2()
  )

  const jsonFeed = writeFile(
    path.join(__dirname, 'public', 'feed.json'),
    feed.json1()
  )

  const atomFeed = writeFile(
    path.join(__dirname, 'public', 'feed.atom'),
    feed.atom1()
  )

  await Promise.all([xmlFeed, jsonFeed, atomFeed])

  notifier.notify({
    title: 'Build complete!',
    message: '✨'.repeat(17)
  })
})()
