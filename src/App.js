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

export default _ => (
  <Fragment>
    <Header>
      <PrimaryHeading>Joe Haines <Waving>👋</Waving></PrimaryHeading>
    </Header>

    <BlogList>
      <BlogListItem>
        <Link>
          <BlogTitle>Leverage agile frameworks to provide a robust synopsis</BlogTitle>

          <BlogDescription>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</BlogDescription>

          <Small>Feb 12 2018</Small>
        </Link>
      </BlogListItem>

      <BlogListItem>
        <Link>
          <BlogTitle>Bring to the table win-win survival strategies</BlogTitle>

          <BlogDescription>At the end of the day, going forward, a new normal that has evolved</BlogDescription>

          <Small>Jan 31 2018</Small>
        </Link>
      </BlogListItem>

      <BlogListItem>
        <Link>
          <BlogTitle>Capitalize on low hanging fruit</BlogTitle>

          <BlogDescription>Override the digital divide with additional clickthroughs from DevOps</BlogDescription>

          <Small>Dec 10 2017</Small>
        </Link>
      </BlogListItem>
    </BlogList>

    <Footer />
  </Fragment>
)
