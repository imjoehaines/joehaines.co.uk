import React, { Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import { StaticRouter, BrowserRouter, Route, Link } from 'react-router-dom'

import App from './App'
import getPosts from './util/get-posts'
import BlogPost from './components/BlogPost'
import globalStyles from './util/global-styles'

injectGlobal`${globalStyles}`

const Router = typeof document !== 'undefined'
  ? BrowserRouter
  : StaticRouter

const posts = getPosts(__dirname)

export default ({ basename, pathname }) =>
  <Router
    basename={basename}
    location={pathname}
    context={{}}
  >
    <App posts={posts} />
  </Router>
