import path from 'path'
import rimraf from 'rimraf'
import copyDirectory from 'copy-dir'

export default (root, publicDirectory) => {
  rimraf.sync(path.join(publicDirectory, 'images', '*'))

  copyDirectory.sync(
    path.join(root, 'src', 'assets', 'images'),
    path.join(publicDirectory, 'images')
  )
}
