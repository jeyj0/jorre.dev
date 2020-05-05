const { html } = require('htm/preact')
const { Nav } = require('./Nav')
const { Menubar } = require('./Menubar')

module.exports = {
  Page: ({ title, description, menubar = true, children }) => html`
<html lang="en">
  <head>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta charset="utf8"/>
    <meta name="viewport" content="width=device-width; initial-scale=1" />
    <meta name="theme-color" content="#333" />
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="/styles/main.css" />
  </head>
  <body>
    <a id="link-to-main-content" href="#main-content" tabindex="1">Skip to content</a>
    <${Nav} />
    ${menubar ? html`<${Menubar} />` : null}
    <div id="main-content">
      ${children}
    </div>
    <footer>
      That's it!
    </footer>
    <script src="/scripts/main.js" />
  </body>
</html>
`
}
