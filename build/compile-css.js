import fs from 'fs'
import cssnano from 'cssnano'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

export default (sourceFile, destinationFile) => {
  postcss()
    .use(postcssImport())
    .use(postcssPresetEnv({ stage: 3 }))
    .use(cssnano({ preset: 'advanced' }))
    .process(fs.readFileSync(sourceFile), {
      from: sourceFile,
      to: destinationFile
    })
    .then(css => fs.writeFileSync(destinationFile, css))
    .catch(err => console.error(err))
}
