import React from 'react'
import { highlight, languages } from 'prismjs'

export default ({ language, value, className = '' }) => {
  if (!languages[language]) {
    try {
      require(`prismjs/components/prism-${language}`)
    } catch (err) {
      console.error(`Couldn't find language "${language}" at "prismjs/components/prism-${language}"`)
    }
  }

  return (
    <pre className={`language-${language} ${className}`.trim()}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlight(value, languages[language]) }}
      />
    </pre>
  )
}
