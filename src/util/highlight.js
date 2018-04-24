import { highlight, languages } from 'prismjs'

const aliases = new Map([
  ['md', 'markdown'],
  ['shell', 'bash'],
  ['objective-c', 'objectivec']
])

const dependencies = new Map([
  ['arduino', 'cpp'],
  ['bison', 'c'],
  ['cpp', 'c'],
  ['crystal', 'ruby'],
  ['objectivec', 'c'],
  ['opencl', 'c'],
  ['scala', 'java'],
  ['vbnet', 'basic'],
  ['php', 'markup-templating']
])

export default (text, language) => {
  // use an alias if one is defined
  aliases.has(language) && (language = aliases.get(language))

  if (!languages[language]) {
    // some languages rely on others being loaded first
    if (dependencies.has(language)) {
      require(`prismjs/components/prism-${dependencies.get(language)}`)
    }

    try {
      require(`prismjs/components/prism-${language}`)
    } catch (err) {
      console.error(`Couldn't find language "${language}" at "prismjs/components/prism-${language}"`)
    }
  }

  return highlight(text, languages[language])
}
