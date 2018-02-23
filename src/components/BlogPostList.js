import React, { Fragment } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import Date from './Date'

export default ({ posts }) =>
  <Fragment>
    <header>
      <h1>Joe Haines</h1>
    </header>

    <ul className='blog-list'>
      {posts.map(post =>
        <li key={post.slug} className='blog-list-item'>
          <ReactRouterLink to={post.slug} className='block text-decoration-none'>
            <h2 className='blog-list-item__title'>{post.title}</h2>

            <p className='blog-list-item__description'>{post.description}</p>

            <small><Date date={post.date} /></small>
          </ReactRouterLink>
        </li>
      )}
    </ul>
  </Fragment>
