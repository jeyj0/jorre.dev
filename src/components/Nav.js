const { html } = require('htm/preact')

module.exports = {
  Nav: () => html`
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle" class="noprint">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `
}