const fs = require('fs')
const path = require('path')
const util = require('util')
const cssnano = require('cssnano')
const postcss = require('postcss')
const posthtml = require('posthtml')
const removeTags = require('posthtml-remove-tags')
const styleToFile = require('posthtml-style-to-file')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

;(async _ => {
  const styleFile = path.join(__dirname, 'public', 'style.min.css')

  const { html } = await posthtml()
    .use(styleToFile({ path: styleFile }))
    .use(removeTags({ tags: ['style'] }))
    .process(await readFile(path.join(__dirname, 'public', 'index.html')))

  await writeFile(path.join(__dirname, 'public', 'index.html'), html)

  const prismCssFile = path.join(__dirname, 'node_modules', 'prismjs', 'themes', 'prism.css')

  const concatenatedStyles = await readFile(prismCssFile) + await readFile(styleFile)

  const { css } = await postcss()
    .use(cssnano({ preset: 'advanced' }))
    .process(concatenatedStyles, { from: styleFile, to: styleFile })

  await writeFile(styleFile, css)
})()
