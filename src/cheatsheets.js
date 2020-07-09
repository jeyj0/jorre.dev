const { html } = require('htm/preact')
const { Page } = require('./components/Page')

module.exports = {
  Renderable: () => html`
<${Page} title="Cheatsheets - Jannis Jorre" description="A collection of cheatsheets" menubar=${true}>
  <h1>Cheatsheets</h1>
  <main class="content">
    <aside>None of these are made by me (at the moment). They are awesome however, and I use them or refer to them a lot.</aside>
    <h2>Web Development</h2>
    <p>
      <ul>
        <li><a href="http://flexbox.malven.co/" target="_blank" rel="noopener">CSS Flexbox</a></li>
        <li><a href="http://grid.malven.co/" target="_blank" rel="noopener">CSS Grid</a></li>
        <li>
          <a href="https://twitter.com/iamakulov/status/1275769142809944064" target="_blank" rel="noopener">Performance optimizations</a> (
          <a href="https://threader.app/thread/1275769142809944064" target="_blank" rel="noopener">formatted version</a>)
        </li>
      </ul>
    </p>
    <h2>Haskell</h2>
    <p>
      <ul>
        <li><a href="https://hackage.haskell.org/package/lens-tutorial-1.0.3/docs/Control-Lens-Tutorial.html">Control.Lens Tutorial</a></li>
      </ul>
    </p>
  </main>
</${Page}>
  `
}
