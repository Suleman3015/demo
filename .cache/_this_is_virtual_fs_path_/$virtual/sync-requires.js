
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/vtech/Desktop/Gatsby-Clone/.cache/dev-404-page.js")),
  "component---src-pages-blog-list-js": preferDefault(require("/Users/vtech/Desktop/Gatsby-Clone/src/pages/blog-list.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vtech/Desktop/Gatsby-Clone/src/pages/index.js")),
  "component---src-pages-news-js": preferDefault(require("/Users/vtech/Desktop/Gatsby-Clone/src/pages/news.js"))
}

