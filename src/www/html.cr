module Www
  struct Html
    def self.begin(title)
      <<-HTML
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />

              <link rel="icon" type="image/png" href="/favicon.png" />
              <!-- TODO -->
              <!-- <link rel="stylesheet" href="/style.min.css" /> -->

              <!-- TODO -->
              <!-- <link rel="alternate" title="Joe Haines" type="application/rss+xml" href="/feed.xml" /> -->
              <!-- TODO -->
              <!-- <link rel="alternate" title="Joe Haines" type="application/json" href="/feed.json" /> -->
              <!-- TODO -->
              <!-- <link rel="alternate" title="Joe Haines" type="application/atom+xml" href="/feed.atom" /> -->

              <meta
                name="description"
                content="Joe Haines, software developer from the UK"
              />

              <title>#{title && title + " - "}Joe Haines</title>
            </head>

            <body>
      HTML
    end

    def self.end
      <<-HTML
            <footer>
              <div class="flex">
                <small>
                  &copy; #{Time.now.year} <a rel="noopener noreferrer" href="/">Joe Haines</a>
                </small>

                <!-- TODO -->
                <!-- <small> -->
                  <!-- <a rel="noopener noreferrer" href="/feed.xml"> -->
                    <!-- RSS feed<span class="m-l-1/4"><Rss size={16} /></span> -->
                  <!-- </a> -->
                <!-- </small> -->
              </div>
            </footer>
          </body>
        </html>
      HTML
    end
  end
end
