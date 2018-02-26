import React, { Fragment } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import Date from './Date'
import formatReadingTime from '../util/format-reading-time'

export default ({ posts }) =>
  <Fragment>
    <header>
      <h1>Joe Haines</h1>

      <div className='flex m-t-1/2'>
        <small>
          Software developer from the UK
        </small>

        <small className='pull-right'>
          {posts
            .map(({ readingTime }) => readingTime)
            .map(formatReadingTime)
            .reduce((totalTime, readingTime) => totalTime + readingTime, 0)
          } minute read
        </small>
      </div>
    </header>

    <ul className='blog-list'>
      {posts.map(({ slug, title, description, date, readingTime }) =>
        <li key={slug} className='blog-list-item'>
          <ReactRouterLink to={slug} className='block text-decoration-none'>
            <h2 className='blog-list-item__title'>
              {title}
            </h2>

            <p className='blog-list-item__description'>
              {description}
            </p>

            <div className='flex m-t-1/2'>
              <small>
                <Date date={date} />
              </small>

              <small className='pull-right'>
                {formatReadingTime(readingTime)} minute read
              </small>
            </div>
          </ReactRouterLink>
        </li>
      )}
    </ul>
  </Fragment>
