import React from 'react'
import Markdown from 'react-markdown'

import Code from './Code'
import Date from './Date'
import Link from './Link'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'
import InlineCode from './InlineCode'

export default ({ title, date, body, previousLink, previousText, nextLink, nextText }) =>
  <article>
    <header>
      <h1>{title}</h1>

      <small>
        <Date date={date} />
      </small>
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
