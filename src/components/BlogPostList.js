import React, { Fragment } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import PostInformation from './PostInformation'
import formatReadingTime from '../util/format-reading-time'

export default ({ posts }) =>
  <Fragment>
    <header>
      <h1>Joe Haines</h1>

      <PostInformation
        description='Software developer from the UK'
        readingTime={
          posts
            .map(({ readingTime }) => readingTime)
            .map(formatReadingTime)
            .reduce((totalTime, readingTime) => totalTime + readingTime, 0)
        }
      />
    </header>

    <ul className='blog-list'>
      {posts.map(({ slug, title, description, date, readingTime }) =>
        <li key={slug} className='blog-list-item'>
          <h2 className='blog-list-item__title'>
            <ReactRouterLink to={slug}>
              {title}
            </ReactRouterLink>
          </h2>

          <PostInformation date={date} readingTime={readingTime} />
        </li>
      )}
    </ul>
  </Fragment>
