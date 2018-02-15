import React, { Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import BlogPost from './components/BlogPost'
import DateComponent from './components/Date'

export default ({ basename, pathname, posts }) => (
  <Fragment>
    <Switch>
      <Route
        exact
        path='/'
        render={_ =>
          <Fragment>
            <header>
              <h1>Joe Haines <span className='wave'>👋</span></h1>
            </header>

            <ul className='blog-list'>
              {posts.map(post =>
                <li key={post.slug} className='blog-list-item'>
                  <Link to={post.slug} className='block text-decoration-none'>
                    <h2 className='blog-list-item__title'>{post.title}</h2>

                    <p className='blog-list-item__description'>{post.description}</p>

                    <small><DateComponent date={post.date} /></small>
                  </Link>
                </li>
              )}
            </ul>
          </Fragment>
        }
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
        &copy; {(new Date()).getFullYear()} Joe Haines
      </small>
    </footer>
  </Fragment>
)
