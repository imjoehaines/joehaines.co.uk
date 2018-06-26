// TODO RSS feeds
// TODO make async

import path from 'path'

import getPosts from '../src/util/get-posts'

import copyImages from './copy-images'
import compileCss from './compile-css'
import createSitemap from './create-sitemap'
import createRssFeed from './create-rss-feed'
import createPostPage from './create-post-page'
import createStaticPages from './create-static-pages'

const root = path.join(__dirname, '..')
const publicDirectory = path.join(root, 'public')

const posts = getPosts(path.join(root, 'posts'))

copyImages(root, publicDirectory)

createStaticPages(posts, publicDirectory)

posts.forEach(createPostPage(publicDirectory))

compileCss(
  path.join(__dirname, '..', 'src', 'assets', 'css', 'index.css'),
  path.join(publicDirectory, 'style.min.css')
)

createSitemap(publicDirectory)

createRssFeed(posts, publicDirectory)
