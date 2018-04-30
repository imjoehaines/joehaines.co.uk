import React from 'react'

import Date from './Date'
import formatReadingTime from '../util/format-reading-time'

export default ({ readingTime = '', date = '', description = '' }) =>
  <div className='flex m-t-1/2'>
    {description &&
      <span class='description'>
        {description}
      </span>
    }

    {date && <Date date={date} />}

    {readingTime &&
      <span className='reading-time'>
        {formatReadingTime(readingTime)} minute read
      </span>
    }
  </div>
