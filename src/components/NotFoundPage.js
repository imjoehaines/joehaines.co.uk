import React, { Fragment } from 'react'

import Link from './Link'
import PostInformation from './PostInformation'

export default _ =>
  <Fragment>
    <header>
      <h1>Uh oh!</h1>

      <PostInformation description='404 — not found' />
    </header>

    <p>The page you requested doesn't seem to exist.</p>

    <p>Please try again or <Link href='/'>go back to the home page</Link>.</p>
  </Fragment>
