const fs = require('fs')
const glob = require('glob')
const path = require('path')
const util = require('util')
const rimraf = require('rimraf')
const cssnano = require('cssnano')
const postcss = require('postcss')
const posthtml = require('posthtml')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const generateSitemap = require('sitemap-static')
const extendAttributes = require('posthtml-extend-attrs')

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
})()
