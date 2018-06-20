// TODO RSS feeds
// TODO CSS compilation
// TODO sitemap
// TODO modularise some

import fs from 'fs'
import path from 'path'
import React from 'react'
import rimraf from 'rimraf'
import copyDirectory from 'copy-dir'
import { renderToStaticMarkup } from 'react-dom/server'

import getPosts from '../src/util/get-posts'
import BlogPost from '../src/components/BlogPost'
import PageWrapper from '../src/components/PageWrapper'
import BlogPostList from '../src/components/BlogPostList'
import NotFoundPage from '../src/components/NotFoundPage'

const root = path.join(__dirname, '..')

rimraf.sync(path.join(root, 'public', 'images', '*'))

copyDirectory.sync(
  path.join(root, 'src', 'assets', 'images'),
  path.join(root, 'public', 'images')
)

const publicDirectory = path.join(root, 'public')
const posts = getPosts(path.join(root, 'posts'))

const homePage = renderToStaticMarkup(
  <PageWrapper>
    <BlogPostList posts={posts} />
  </PageWrapper>
)

const notFoundPage = renderToStaticMarkup(
  <PageWrapper>
    <NotFoundPage />
  </PageWrapper>
)

fs.writeFileSync(path.join(publicDirectory, 'index.html'), homePage)
fs.writeFileSync(path.join(publicDirectory, '404.html'), notFoundPage)

posts.forEach((post, i) => {
  const directory = path.join(publicDirectory, post.slug)

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }

  const contents = renderToStaticMarkup(
    <PageWrapper title={post.title} description={`${post.title} - ${post.description}`}>
      <BlogPost
        {...post}
        previousLink={posts[i + 1] && ('/' + posts[i + 1].slug)}
        previousText={posts[i + 1] && posts[i + 1].title}
        nextLink={posts[i - 1] && ('/' + posts[i - 1].slug)}
        nextText={posts[i - 1] && posts[i - 1].title}
      />
    </PageWrapper>
  )

  fs.writeFileSync(path.join(directory, 'index.html'), contents)
})
