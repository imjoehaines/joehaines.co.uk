import React from 'react'
import Markdown from 'react-markdown'

import Code from './Code'
import Date from './Date'
import Link from './Link'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'
import InlineCode from './InlineCode'
import formatReadingTime from '../util/format-reading-time'

export default ({ title, date, readingTime, body, previousLink, previousText, nextLink, nextText }) =>
  <article>
    <header>
      <h1>{title}</h1>

      <div className='flex m-t-1/2'>
        <small>
          <Date date={date} />
        </small>

        <small className='pull-right'>
          {formatReadingTime(readingTime)} minute read
        </small>
      </div>
    </header>

    <Markdown
      source={body}
      renderers={{
        blockquote: BlockQuote,
        inlineCode: InlineCode,
        code: Code,
        tableCell: TableCell,
        link: Link
      }}
    />

    <footer className='blog-post__footer'>
      {previousLink &&
        <Link className='button' href={previousLink}>&larr;&nbsp;{previousText}</Link>
      }

      {nextLink &&
        <Link className='button blog-post__navigation--next' href={nextLink}>{nextText}&nbsp;&rarr;</Link>
      }
    </footer>
  </article>
