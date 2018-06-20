// TODO RSS feeds
// TODO CSS compilation
// TODO sitemap
// TODO modularise some
// TODO make async

import path from 'path'

import getPosts from '../src/util/get-posts'

import copyImages from './copy-images'
import createPostPage from './create-post-page'
import createStaticPages from './create-static-pages'

const root = path.join(__dirname, '..')
const publicDirectory = path.join(root, 'public')

const posts = getPosts(path.join(root, 'posts'))

copyImages(root, publicDirectory)

createStaticPages(posts, publicDirectory)

posts.forEach(createPostPage(publicDirectory))
