const { html } = require('htm/preact')

module.exports = {
  Nav: () => html`
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <a href="/" aria-label="Go to home page">Home</a>
      <a href="/about" aria-label="Go to about page">About</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle" class="noprint">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `
}
