const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const express = require('express')

const app = express()

const root = path.join(__dirname, 'public')

app.use(morgan('dev'))

app.use(express.static(root, {
  setHeaders (response, filePath, stat) {
    const headersFileContents = fs.readFileSync(path.join(root, '_headers')).toString()

    const headers = headersFileContents.split('\n')
      .filter((_, i) => i !== 0 && i < 7)
      .map(header => header.trim())
      .filter(header => !!header)

    headers.forEach(headerLine => {
      const [header, value] = headerLine.split(': ')

      response.header(header, value)
    })
  }
}))

app.use(function (req, res, next) {
  const html = fs.readFileSync(path.join(root, '404/index.html')).toString()

  res.status(404).send(html)
})

app.listen(3000, _ => console.log('Running on port 3000'))
