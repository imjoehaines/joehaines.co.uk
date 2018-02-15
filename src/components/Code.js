import React from 'react'
import { highlight, languages } from 'prismjs'

const aliases = new Map([
  ['md', 'markdown']
])

export default ({ language, value, className = '' }) => {
  if (!language) {
    return (
      <pre className={`language-none ${className}`.trim()}>
        <code className='language-none'>{value}</code>
      </pre>
    )
  }

  // use an alias if one is defined
  aliases.has(language) && (language = aliases.get(language))

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
