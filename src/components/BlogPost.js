import React from 'react'
import Markdown from 'react-markdown'

import Code from './Code'
import Link from './Link'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'
import InlineCode from './InlineCode'
import PostInformation from './PostInformation'

export default ({ title, date, readingTime, body, previousLink, previousText, nextLink, nextText }) =>
  <article>
    <header>
      <h1>{title}</h1>

      <PostInformation date={date} readingTime={readingTime} />
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

    <footer className='blog-post__footer flex'>
      {previousLink &&
        <Link className='button' href={previousLink}>&larr;&nbsp;{previousText}</Link>
      }

      {nextLink &&
        <Link className='button blog-post__navigation--next' href={nextLink}>{nextText}&nbsp;&rarr;</Link>
      }
    </footer>
  </article>
