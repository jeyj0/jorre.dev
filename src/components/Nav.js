const { html } = require('htm/preact')

module.exports = {
  Nav: () => html`
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <button id="theme-switch-btn">Toggle Lights</button>
      <a href="/" aria-label="Go to home page">Home</a>
      <a href="https://notes.jorre.dev/" aria-label="Go to the personal knowledge base of Jannis Jorre">Notes</a>
      <a href="https://notes.jorre.dev/notes/20200921153406-cheatsheets.html" aria-label="Go to a list of cheatsheets">Cheatsheets</a>
      <a href="https://notes.jorre.dev/notes/20200902060102-resources.html" aria-label="Go to a list of resources">Other Resources</a>
      <a href="/tools" aria-label="Go to a list of tools">Tools</a>
      <a href="https://search.jorre.dev/" aria-label="Search the web with a custom search tool">Search the Web</a>
      <a href="/impressum" aria-label="See who's responsible for this page">Impressum</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle" class="noprint">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `
}
