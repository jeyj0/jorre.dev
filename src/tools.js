const { html } = require('htm/preact')
const { Page } = require('./components/Page')

module.exports = {
  Renderable: () => html`
<${Page} title="Cheatsheets - Jannis Jorre" description="A collection of cheatsheets" menubar=${true}>
  <h1>Tools</h1>
  <main class="content">
    <h2>Web Development</h2>
    <p>
      <ul>
        <li><a href="https://seek-oss.github.io/capsize/" target="_blank" rel="noopener" aria-label="Go to Capsize">Capsize</a> reads font metadata to force meaningful interpretation of the font-size css property with a little CSS.</li>
        <li><a href="https://css-gen.jorre.dev/" target="_blank" rel="noopener" aria-label="Go to CSS Generators">CSS Generator</a> - a CSS property generator written by myself. It isn't very advanced right now.</li>
      </ul>
    </p>
  </main>
</${Page}>
  `
}
