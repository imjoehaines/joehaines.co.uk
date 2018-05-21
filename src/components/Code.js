import React from 'react'
import highlight from '../util/highlight'

export default ({ language, value }) => {
  if (!language) {
    return (
      <pre className={'language-none code code--block'}>
        <code className='language-none'>{value}</code>
      </pre>
    )
  }

  return (
    <div data-language={language} className='relative overflow-hidden'>
      <pre className={`language-${language} code code--block`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlight(value, language) }}
        />
      </pre>
    </div>
  )
}
