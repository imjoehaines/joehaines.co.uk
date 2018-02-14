import React, { Fragment } from 'react'

import Date from './Date'
import Small from './Small'
import Header from './Header'
import PrimaryHeading from './PrimaryHeading'

export default ({ title, date, body }) =>
  <Fragment>
    <Header>
      <PrimaryHeading>{title}</PrimaryHeading>
    </Header>

    <Small>
      <Date date={date} />
    </Small>

    <p>{body}</p>
  </Fragment>
