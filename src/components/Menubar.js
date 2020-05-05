const { html } = require('htm/preact')

module.exports = {
  Menubar: () => html`
<div class="menubar noprint">
  <a href="/">
    <img class="circle" alt="Portrait of Jannis Jorre" src="/assets/profile.jpg" />
    <span>Jannis Jorre</span>
  </a>
</div>
`
}
