import React from 'react'
import { Home, ArrowLeft, ArrowRight } from 'react-feather'
import Markdown from 'react-markdown'

import Code from './Code'
import Link from './Link'
import Heading from './Heading'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'
import InlineCode from './InlineCode'
import PostInformation from './PostInformation'

export default ({ title, date, readingTime, body, previousLink, previousText, nextLink, nextText }) =>
  <article>
    <header>
      <div className='flex'>
        <h1>{title}</h1>

        <Link href='/'>
          <Home />
        </Link>
      </div>

      <PostInformation date={date} readingTime={readingTime} />
    </header>

    <Markdown
      className='blog-post__body'
      source={body}
      renderers={{
        blockquote: BlockQuote,
        inlineCode: InlineCode,
        code: Code,
        tableCell: TableCell,
        link: Link,
        heading: Heading
      }}
    />

    <footer className='blog-post__footer flex'>
      {previousLink &&
        <Link className='button' href={previousLink}>
          <ArrowLeft size={20} />

          {previousText}
        </Link>
      }

      {nextLink &&
        <Link className='button blog-post__navigation--next' href={nextLink}>
          {nextText}

          <ArrowRight size={20} />
        </Link>
      }
    </footer>
  </article>
