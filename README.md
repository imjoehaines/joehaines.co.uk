# JoeHaines.co.uk [![Greenkeeper badge](https://badges.greenkeeper.io/imjoehaines/joehaines.co.uk.svg)](https://greenkeeper.io/)

This is the code that powers my personal website [joehaines.co.uk](https://www.joehaines.co.uk). It is a static site built with [x0](); I wrote a [blog post with more information](https://www.joehaines.co.uk/using-x0-as-a-blog-system) on the setup, though things have changed since then (most notably using PostCSS instead of Styled Components).

## Developing

- `yarn start` to launch local express server on port 3000
- `yarn build` to build blog locally
- `yarn watch` to watch files in `src/` for changes and rebuild

## Writing

New blog posts are markdown files in `src/posts` and have filenames of the post creation date in `YYYY-MM-DD` format.

Each post has a `title` and `description` in front matter, such as

```markdown
---
title: Hello world
description: Let's see if this works...
---
```

The body of the post then follows.
