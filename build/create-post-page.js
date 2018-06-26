import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import BlogPost from '../src/components/BlogPost'
import PageWrapper from '../src/components/PageWrapper'

export default publicDirectory => (post, i, posts) => {
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
}
