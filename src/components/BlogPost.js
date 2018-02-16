import Markdown from 'react-markdown'
import React, { Fragment } from 'react'

import Code from './Code'
import Date from './Date'
import TableCell from './TableCell'
import BlockQuote from './BlockQuote'

export default ({ title, date, body }) =>
  <Fragment>
    <h1>{title}</h1>

    <small>
      <Date date={date} />
    </small>

    <Markdown
      source={body}
      renderers={{
        blockquote: BlockQuote,
        code: Code,
        tableCell: TableCell
      }}
    />

    <small>
      <a href='/'>&larr; back home</a>
    </small>
  </Fragment>
