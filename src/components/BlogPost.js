import React from 'react'
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

        <Link href='/' title='Home'>
          {/* https://iconmonstr.com/home-6-svg/ */}
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <path d='M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z' />
          </svg>
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
        <Link className='button' href={previousLink}>&larr;&nbsp;{previousText}</Link>
      }

      {nextLink &&
        <Link className='button blog-post__navigation--next' href={nextLink}>{nextText}&nbsp;&rarr;</Link>
      }
    </footer>
  </article>
