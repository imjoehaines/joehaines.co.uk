import React from 'react'

import Date from './Date'

export default ({ date = '', description = '' }) =>
  <div className='flex m-t-1/2'>
    {description &&
      <span className='description'>
        {description}
      </span>
    }

    {date && <Date date={date} />}
  </div>
