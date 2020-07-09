const { html } = require('htm/preact')
const { Nav } = require('./Nav')
const { Menubar } = require('./Menubar')

module.exports = {
  Page: ({ title, description, menubar = true, children, footnotes = null }) => html`
<html lang="en">
  <head>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta charset="utf8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#333" />
    <link rel="stylesheet" type="text/css" href="/styles/main.css" />
    <link rel="stylesheet" type="text/css" href="/styles/fonts.css" />
  </head>
  <body class=${menubar ? '' : 'no-menubar'}>
    <a id="link-to-main-content" href="#main-content">Skip to content</a>
    ${menubar ? html`<${Menubar} />` : null}
    <${Nav} />
    <div id="main-content">
      ${children}
    </div>
    <footer>
      That's it!
      ${footnotes ? html`<p class="footnotes"><small>${footnotes}</small><//>` : ''}
    </footer>
    <script src="/scripts/main.js" />
  </body>
</html>
`
}
