import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Date from './components/Date'
import Small from './components/Small'
import Footer from './components/Footer'
import Header from './components/Header'
import Waving from './components/Waving'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import BlockLink from './components/BlockLink'
import BlogTitle from './components/BlogTitle'
import BlogListItem from './components/BlogListItem'
import PrimaryHeading from './components/PrimaryHeading'
import BlogDescription from './components/BlogDescription'

export default ({ basename, pathname, posts }) => (
  <Fragment>
    <Switch>
      <Route
        exact
        path='/'
        render={_ =>
          <Fragment>
            <Header>
              <PrimaryHeading>Joe Haines <Waving>👋</Waving></PrimaryHeading>
            </Header>

            <BlogList>
              {posts.map(post =>
                <BlogListItem key={post.slug}>
                  <BlockLink to={post.slug}>
                    <BlogTitle>{post.title}</BlogTitle>

                    <BlogDescription>{post.description}</BlogDescription>

                    <Small>
                      <Date date={post.date} />
                    </Small>
                  </BlockLink>
                </BlogListItem>
              )}
            </BlogList>
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

    <Footer />
  </Fragment>
)
