const { html } = require('htm/preact')
const { Page } = require('./components/Page')
module.exports = {
  Renderable: () => html`
<${Page} title="Cheatsheets - Jannis Jorre" description="A collection of cheatsheets" menubar=${true}>
  <h1>Cheatsheets</h1>
  <main class="content">
    <h2>Web Development</h2>
    <p>
      <ul>
      <li><a href="http://flexbox.malven.co/" target="_blank" rel="noopener">CSS Flexbox</a></li>
      <li><a href="http://grid.malven.co/" target="_blank" rel="noopener">CSS Grid</a></li>
      </ul>
    </p>
  </main>
</${Page}>
  `
}
