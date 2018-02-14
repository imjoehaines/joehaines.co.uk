import React, { Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import { StaticRouter, BrowserRouter } from 'react-router-dom'

import App from './App'
import getPosts from './util/get-posts'
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
    <Fragment>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/style.min.css' />

        <title>Joe Haines</title>
      </head>

      <body>
        <App posts={posts} />
      </body>
    </Fragment>
  </Router>
