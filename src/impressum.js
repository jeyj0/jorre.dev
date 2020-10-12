const { html } = require('htm/preact')
const { Page } = require('./components/Page')

module.exports = {
  Renderable: () => html`
<${Page} title="Impressum - Jannis Jorre">
  <main>
    <h1>Impressum: jorre.dev</h1>
    <div class="content">
      <p>
        <ul>
          <li>Jannis Jorre</li>
          <li>jannis@jorre.dev</li>
        </ul>
      </p>
    </div>
  </main>
</${Page}>
  `
}
