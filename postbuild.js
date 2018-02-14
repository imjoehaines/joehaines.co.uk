const fs = require('fs')
const path = require('path')
const cssnano = require('cssnano')
const postcss = require('postcss')

const prismCss = path.join(__dirname, 'node_modules', 'prismjs', 'themes', 'prism.css')
const destination = path.join(__dirname, 'public', 'prism.min.css')

postcss([cssnano])
  .process(fs.readFileSync(prismCss), {
    from: prismCss,
    to: destination
  })
  .then(result => fs.writeFileSync(destination, result.css))
