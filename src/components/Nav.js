const { html } = require('htm/preact')

module.exports = {
  Nav: () => html`
    <button id="theme-switch-btn">Toggle Lights</button>
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <a href="/" aria-label="Go to home page">Home</a>
      <a href="/about" aria-label="Go to about page">About</a>
      <a href="/cheatsheets" aria-label="Go to a list of cheatsheets">Cheatsheets</a>
      <a href="https://css-gen.jorre.dev/" aria-label="Go to CSS Generators">CSS Generator</a>
      <a href="https://search.jorre.dev/" aria-label="Search the web with a custom search tool">Search the Web</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle" class="noprint">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `
}
