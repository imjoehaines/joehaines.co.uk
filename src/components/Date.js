import React from 'react'
import format from 'date-fns/format'

export default ({ date }) =>
  <time dateTime={date.toISOString()} className='date-time'>
    {format(date, 'Do MMMM YYYY')}
  </time>
