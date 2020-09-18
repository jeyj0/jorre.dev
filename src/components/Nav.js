const { html } = require('htm/preact')

module.exports = {
  Nav: () => html`
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <button id="theme-switch-btn">Toggle Lights</button>
      <a href="/" aria-label="Go to home page">Home</a>
      <a href="https://notes.jorre.dev/" aria-label="Go to the personal knowledge base of Jannis Jorre">Notes</a>
      <a href="/cheatsheets" aria-label="Go to a list of cheatsheets">Cheatsheets</a>
      <a href="/awesomes" aria-label="Go to a list of awesome resources">Awesome Resources</a>
      <a href="/tools" aria-label="Go to a list of tools">Tools</a>
      <a href="https://search.jorre.dev/" aria-label="Search the web with a custom search tool">Search the Web</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle" class="noprint">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `
}
