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

const publicDirectory = path.join(__dirname, 'public')

const processDirectory = (processor, directory, directoryPath) => {
  directory
    .reduce((acc, file) => {
      const filePath = path.join(directoryPath, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        processDirectory(processor, fs.readdirSync(filePath), filePath)

        return acc
      }

      if (file.endsWith('.html')) {
        return acc.concat(filePath)
      }

      return acc
    }, [])
    .forEach(async file => {
      const { html } = await processor.process(await readFile(file))

      writeFile(file, html)
    })
}

;(async _ => {
  const styleFile = path.join(publicDirectory, 'style.min.css')

  const processor = posthtml()
    .use(styleToFile({ path: styleFile }))
    .use(removeTags({ tags: ['style'] }))

  processDirectory(
    processor,
    fs.readdirSync(publicDirectory),
    publicDirectory
  )

  const prismCssFile = path.join(__dirname, 'node_modules', 'prismjs', 'themes', 'prism.css')

  const concatenatedStyles = await readFile(prismCssFile) + await readFile(styleFile)

  const { css } = await postcss()
    .use(cssnano({ preset: 'advanced' }))
    .process(concatenatedStyles, { from: styleFile, to: styleFile })

  await writeFile(styleFile, css)
})()
