const fs = require('fs')
const glob = require('glob')
const path = require('path')
const util = require('util')
const cssnano = require('cssnano')
const postcss = require('postcss')
const posthtml = require('posthtml')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const extendAttributes = require('posthtml-extend-attrs')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

;(async _ => {
  const processor = posthtml()
    .use(extendAttributes({ attrsTree: { html: { lang: 'en' } } }))

  // process every HTML file in `public`
  glob.sync(path.join(__dirname, 'public/**/*.html')).forEach(async file => {
    const { html } = await processor.process(await readFile(file))

    writeFile(file, html)
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
})()
