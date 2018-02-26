import React, { Fragment } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import Date from './Date'

export default ({ posts }) =>
  <Fragment>
    <header>
      <h1>Joe Haines</h1>
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

            <small>
              <Date date={date} />
            </small>

            <small className='pull-right'>
              {readingTime}
            </small>
          </ReactRouterLink>
        </li>
      )}
    </ul>
  </Fragment>
