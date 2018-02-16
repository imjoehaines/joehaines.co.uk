import React from 'react'
import highlight from '../util/highlight'
import classifier from 'language-classifier'

export default ({ value }) => {
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
}
