import fs from 'fs'
import cssnano from 'cssnano'
import postcss from 'postcss'
import cssnext from 'postcss-cssnext'
import postcssImport from 'postcss-import'

// TODO use postcss-preset-env instead of cssnext
export default (sourceFile, destinationFile) => {
  postcss()
    .use(postcssImport())
    .use(cssnext())
    .use(cssnano({ preset: 'advanced' }))
    .process(fs.readFileSync(sourceFile), {
      from: sourceFile,
      to: destinationFile
    })
    .then(css => fs.writeFileSync(destinationFile, css))
    .catch(err => console.error(err))
}
