import React from 'react'
import classifier from 'language-classifier'

import highlight from '../util/highlight'

export default ({ value }) => {
  try {
    const language = classifier(value)

    const highlightedCode = language && highlight(value, language)

    // don't label something as highlighted as that language unless Prism is actually
    // doing some syntax highlighting
    if (!language || !highlightedCode.includes('<span class="token')) {
      return <code className='language-none code code--inline'>{value}</code>
    }

    return (
      <code
        className={`language-${language} code code--inline`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    )
  } catch (err) {
    return <code className='language-none code code--inline'>{value}</code>
  }
}
