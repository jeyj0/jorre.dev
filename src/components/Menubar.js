const { html } = require('htm/preact')

module.exports = {
  Menubar: () => html`
<div class="menubar noprint">
  <a href="/" aria-label="Go to home page">
    <img class="circle" alt="Portrait of Jannis Jorre" src="/assets/profile.jpg" />
    <span>Jannis Jorre</span>
  </a>
</div>
`
}
