import React from 'react'

import Date from './date'
import formatReadingTime from '../util/format-reading-time'

export default ({ readingTime, date = '', description = '' }) =>
  <div className='flex m-t-1/2'>
    {description &&
      <small>
        {description}
      </small>
    }

    {date &&
      <small>
        <Date date={date} />
      </small>
    }

    <small>
      {formatReadingTime(readingTime)} minute read
    </small>
  </div>
