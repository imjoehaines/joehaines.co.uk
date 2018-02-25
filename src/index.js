import React from 'react'
import { Route, StaticRouter, Switch } from 'react-router-dom'

import getPosts from './util/get-posts'
import BlogPost from './components/BlogPost'
import PageWrapper from './components/PageWrapper'
import BlogPostList from './components/BlogPostList'

const posts = getPosts(__dirname)

export default ({ basename, pathname }) =>
  <StaticRouter
    basename={basename}
    location={pathname}
    context={{}}
  >
    <Switch>
      <Route
        exact
        path='/'
        render={_ =>
          <PageWrapper>
            <BlogPostList posts={posts} />
          </PageWrapper>
        }
      />
      {posts.map((post, i) =>
        <Route
          key={post.slug}
          path={'/' + post.slug}
          render={_ =>
            <PageWrapper title={post.title} description={`${post.title} - ${post.description}`}>
              <BlogPost
                {...post}
                previousLink={posts[i + 1] && ('/' + posts[i + 1].slug)}
                previousText={posts[i + 1] && posts[i + 1].title}
                nextLink={posts[i - 1] && ('/' + posts[i - 1].slug)}
                nextText={posts[i - 1] && posts[i - 1].title}
              />
            </PageWrapper>
          }
        />
      )}
    </Switch>
  </StaticRouter>
