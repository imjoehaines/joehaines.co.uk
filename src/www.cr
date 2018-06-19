require "markd"
require "front_matter"

require "./www/html"

# TODO home page (list posts)
# TODO 404 page
# TODO RSS feeds
# TODO custom markdown rendering:
#   - BlockQuote
#   - Code
#   - Heading
#   - InlineCode
#   - Tables
# TODO syntax highlighting
# TODO next post button
# TODO previous post button
# TODO CSS compilation
# TODO sitemap
# TODO dev server
module Www
  posts_directory = "#{__DIR__}/../posts/"

  Dir.open(posts_directory).each_child do |filename|
    FrontMatter.open("#{posts_directory}/#{filename}") do |raw_front_matter, content|
      front_matter = raw_front_matter.split("\n").map { |line| line.split(": ") }.to_h

      options = Markd::Options.new(smart: true, safe: true)

      slug = front_matter["title"].dump_unquoted.gsub(" ", "-").downcase

      directory = "#{__DIR__}/../public/#{slug}"

      unless Dir.exists?(directory)
        Dir.mkdir(directory)
      end

      html = Html.begin(front_matter["title"]) +
             Markd.to_html(content.gets_to_end) +
             Html.end

      puts "Writing to #{directory}/index.html"
      File.write("#{directory}/index.html", html)
    end
  end
end
