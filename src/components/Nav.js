const { html } = require('htm/preact')

module.exports = () => {
  const markup = html`
    <input type="checkbox" aria-hidden="true" id="nav-toggle" />
    <nav aria-hidden="false">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <label id="nav-toggle-label" aria-hidden="true" for="nav-toggle">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  `

  return markup
}
