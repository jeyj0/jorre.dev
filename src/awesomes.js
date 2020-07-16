const { html } = require('htm/preact')
const { Page } = require('./components/Page')

module.exports = {
  Renderable: () => html`
<${Page} title="Awesome Links - Jannis Jorre" description="A collection of awesome resources that I want to remember" menubar=${true}>
  <h1>Awesome Resources</h1>
  <main class="content">
    <h2>Talks</h2>
    <p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=MDYh2mnDCIM">"Intensely Practical Tips for Growing an Indie Studio"</a>
          <div class="blockquote">
            <h3>Tl;dr</h3>
            <p>
              <ul>
                <li>Budget, Schedule, Revenue</li>
                <li>What are you in this for?</li>
                <li>Tell people you fucked up</li>
                <li>Put it in writing</li>
                <li>Twenty percent Contingency</li>
              </ul>
            </p>
          </div>
        </li>
      </ul>
    </p>
  </main>
</${Page}>
  `
}
