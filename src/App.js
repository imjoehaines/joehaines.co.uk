import React, { Fragment } from 'react'

import Link from './components/Link'
import Small from './components/Small'
import Footer from './components/Footer'
import Header from './components/Header'
import Waving from './components/Waving'
import BlogList from './components/BlogList'
import BlogTitle from './components/BlogTitle'
import BlogListItem from './components/BlogListItem'
import PrimaryHeading from './components/PrimaryHeading'
import BlogDescription from './components/BlogDescription'

export default ({ posts }) => (
  <Fragment>
    <Header>
      <PrimaryHeading>Joe Haines <Waving>👋</Waving></PrimaryHeading>
    </Header>

    <BlogList>
      {posts.map(post =>
        <BlogListItem key={post.date}>
          <Link>
            <BlogTitle>{post.title}</BlogTitle>

            <BlogDescription>{post.description}</BlogDescription>

            <Small>{post.date}</Small>
          </Link>
        </BlogListItem>
      )}
    </BlogList>

    <Footer />
  </Fragment>
)
