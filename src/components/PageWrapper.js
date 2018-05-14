import React from 'react'
import { Rss } from 'react-feather'

import Link from './Link'

export default ({ children, description = '', title = '' }) =>
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {/* https://iconmonstr.com/code-2-png/ */}
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link rel='stylesheet' href='/style.min.css' />

      <link rel='alternate' title='Joe Haines' type='application/rss+xml' href='/feed.xml' />
      <link rel='alternate' title='Joe Haines' type='application/json' href='/feed.json' />
      <link rel='alternate' title='Joe Haines' type='application/atom+xml' href='/feed.atom' />

      <meta
        name='description'
        content={`Joe Haines, software developer from the UK${description && ` - ${description}`}`}
      />

      <title>{title && title + ' - '}Joe Haines</title>
    </head>

    <body>
      {children}

      <footer>
        <div className='flex'>
          <small>
            &copy; {new Date().getFullYear()} <Link href='/'>Joe Haines</Link>
          </small>

          <small>
            <Link href='/feed.xml'>
              RSS feed<span className='m-l-1/4'><Rss size={16} /></span>
            </Link>
          </small>
        </div>
      </footer>
    </body>
  </html>
