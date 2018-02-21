import Markdown from 'react-markdown'
import React, { Fragment } from 'react'

import Code from './Code'
import Date from './Date'
import Link from './Link'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'
import InlineCode from './InlineCode'

export default ({ title, date, body }) =>
  <Fragment>
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

    <small>
      <a href='/'>&larr; back home</a>
    </small>
  </Fragment>
