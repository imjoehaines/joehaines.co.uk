import React from 'react'
import { Route, StaticRouter, Switch } from 'react-router-dom'

import getPosts from './util/get-posts'
import BlogPost from './components/BlogPost'
import BlogPostList from './components/BlogPostList'

const posts = getPosts(__dirname)

export default ({ basename, pathname }) =>
  <StaticRouter
    basename={basename}
    location={pathname}
    context={{}}
  >
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/style.min.css' />

        <title>Joe Haines</title>
      </head>

      <body>
        <Switch>
          <Route
            exact
            path='/'
            render={_ => <BlogPostList posts={posts} />}
          />
          {posts.map(post =>
            <Route
              key={post.slug}
              path={'/' + post.slug}
              render={_ => <BlogPost {...post} />}
            />
          )}
        </Switch>

        <footer>
          <small>
            &copy; {new Date().getFullYear()} Joe Haines
          </small>
        </footer>
      </body>
    </html>
  </StaticRouter>
