/* eslint-disable */
const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettier.config.js')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby(['pages/*.tsx', 'data/**/*.mdx', '!pages/_*.tsx', '!pages/api'])
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page.replace('pages', '').replace('data', '').replace('.tsx', '').replace('.mdx', '')
                const route = path === '/index' ? '' : path

                return `
                        <url>
                            <loc>${`https://samuelkraft.com${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
