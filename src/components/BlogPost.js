import Markdown from 'react-markdown'
import React, { Fragment } from 'react'

import Code from './Code'
import Date from './Date'
import Link from './Link'
import Small from './Small'
import BlockQuote from './BlockQuote'
import PrimaryHeading from './PrimaryHeading'

export default ({ title, date, body }) =>
  <Fragment>
    <PrimaryHeading>{title}</PrimaryHeading>

    <Small>
      <Date date={date} />
    </Small>

    <Markdown
      source={body}
      renderers={{
        link: Link,
        blockquote: BlockQuote,
        code: Code,
        heading: props => {
          const Heading = PrimaryHeading.withComponent(`h${props.level}`)

          return <Heading {...props} />
        }
      }}
    />

    <Small>
      <Link href='/'>&larr; back home</Link>
    </Small>
  </Fragment>
