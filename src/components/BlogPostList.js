import React, { Fragment } from 'react'

import Link from './Link'
import PostInformation from './PostInformation'

export default ({ posts }) =>
  <Fragment>
    <header>
      <h1>Joe Haines</h1>

      <PostInformation description='Software developer from the UK' />
    </header>

    <ul className='blog-list'>
      {posts.map(({ slug, title, description, date }) =>
        <li key={slug} className='blog-list-item'>
          <h2 className='blog-list-item__title'>
            <Link href={slug}>
              {title}
            </Link>
          </h2>

          <PostInformation date={date} />
        </li>
      )}
    </ul>
  </Fragment>
