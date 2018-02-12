import React, { Fragment } from 'react'
import { injectGlobal } from 'styled-components'

import App from './App'
import getPosts from './util/get-posts'
import globalStyles from './util/global-styles'

injectGlobal`${globalStyles}`

const posts = getPosts(__dirname)

export default _ =>
  <Fragment>
    <App posts={posts} />
  </Fragment>
