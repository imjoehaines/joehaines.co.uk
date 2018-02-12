import React, { Fragment } from 'react'

import Small from './Small'
import Header from './Header'
import PrimaryHeading from './PrimaryHeading'

export default ({ title, date, body }) =>
  <Fragment>
    <Header>
      <PrimaryHeading>{title}</PrimaryHeading>
    </Header>

    <Small>{date}</Small>

    <p>{body}</p>
  </Fragment>
