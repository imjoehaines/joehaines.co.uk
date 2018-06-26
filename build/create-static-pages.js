import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import PageWrapper from '../src/components/PageWrapper'
import BlogPostList from '../src/components/BlogPostList'
import NotFoundPage from '../src/components/NotFoundPage'

export default (posts, publicDirectory) => {
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
}
