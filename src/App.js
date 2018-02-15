import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import BlogPost from './components/BlogPost'
import BlogPostList from './components/BlogPostList'

export default ({ basename, pathname, posts }) => (
  <Fragment>
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
  </Fragment>
)
