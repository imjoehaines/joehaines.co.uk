import fs from 'fs'
import path from 'path'
import Feed from 'feed'
import remark from 'remark'
import remarkHtml from 'remark-html'

export default (posts, publicDirectory) => {
  const updated = posts.reduce(
    (latestUpdate, post) => post.date > latestUpdate ? post.date : latestUpdate,
    new Date(2018, 0, 1)
  )

  const feed = new Feed({
    updated,
    title: 'Joe Haines',
    description: 'Software developer from the UK',
    id: 'https://www.joehaines.co.uk/',
    link: 'https://www.joehaines.co.uk/',
    image: 'https://www.joehaines.co.uk/favicon.png',
    favicon: 'https://www.joehaines.co.uk/favicon.png',
    copyright: `© ${new Date().getFullYear()} Joe Haines`,
    generator: 'Feed for Node.js',
    feedLinks: {
      json: 'http://joehaines.co.uk/feed.json',
      atom: 'http://joehaines.co.uk/feed.atom'
    },
    author: {
      name: 'Joe Haines',
      email: 'hello@joehaines.co.uk',
      link: 'https://www.joehaines.co.uk'
    }
  })

  posts.filter(({ excludeFromFeed }) => !excludeFromFeed)
    .forEach(({ title, description, date, body, slug }) => {
      remark()
        .use(remarkHtml)
        .process(body, (err, { contents }) => {
          if (err) throw err

          feed.addItem(({
            title,
            description,
            date,
            content: contents,
            id: slug,
            link: `https://www.joehaines.co.uk/${slug}`,
            author: [{
              name: 'Joe Haines',
              email: 'hello@joehaines.co.uk',
              link: 'https://www.joehaines.co.uk'
            }]
          }))
        })
    })

  fs.writeFileSync(
    path.join(publicDirectory, 'feed.xml'),
    feed.rss2()
  )

  fs.writeFileSync(
    path.join(publicDirectory, 'feed.json'),
    feed.json1()
  )

  fs.writeFileSync(
    path.join(publicDirectory, 'feed.atom'),
    feed.atom1()
  )
}
