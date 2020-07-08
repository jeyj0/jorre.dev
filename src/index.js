const { html } = require('htm/preact')
const { Page } = require('./components/Page')
const { GitHub } = require('./components/icons/GitHub')
const { Twitter } = require('./components/icons/Twitter')
const { Email } = require('./components/icons/Email')

module.exports = {
  Renderable: () => html`
<${Page} title="Jannis Jorre" description="Personal website of Jannis Jorre." menubar=${false} footnotes=${html`
  <p class="footnotes">
    All brand icons are trademarks of their respective owners.
    The use of these icons does not indicate endorsement of any kind by me, nor vice versa.
    They are merely used for representational purposes.
  </p>
  <p class="footnotes">
    Icons were created by fontawesome.
    The use of these icons does not indicate endorsement of any kind by me, nor vice versa.
    See the full license at: <a href="https://fontawesome.com/license">https://fontawesome.com/license</a>.
  </p>
`}>
  <div class="top">
    <h1>Full-Stack Software-Engineer</h1>
    <h2>Hello, my name is <span class="accent">Jannis Jorre</span>.</h2>
    <p>What can I help you with? :)</p>
    <div class="socials">
      <a href="https://github.com/jeyj0" target="_blank" rel="noopener" title="GitHub" aria-label="Click here to to go Jannis Jorre's GitHub">
        <${GitHub} />
      </a>
      <a href="https://twitter.com/jannisjorre" target="_blank" rel="noopener" title="Twitter" aria-label="Click here to go to Jannis Jorre's Twitter">
        <${Twitter} />
      </a>
      <a href="mailto:jannis@jorre.dev" title="E-Mail" arial-label="Click here to send Jannis Jorre an email">
        <${Email} />
      </a>
    </div>
    <p>
      Check out my <a href="https://search.jorre.dev/" aria-label="Go to Jannis' custom web search">custom search</a> or
      my <a href="https://github.com/jeyj0/dot-files" aria-label="Go to Jannis' dotfiles repository">dotfiles</a>.
    </p>
  </div>
  <section>
    <main class="content">
      <h2 class="center">Article Series</h2>
      <ul class="article-list">
        <li>
          <a href="/blog/series/testing">
            <span class="article-link-text">
              Automated Software Testing
            </span>
            <div class="arrow-right" aria-hidden="true">
              >
            </div>
          </a>
        </li>
      </ul>
      <h2 class="center">Articles</h2>
      <ul class="article-list">
        <li>
          <a href="/blog/what-and-why-automated-testing">
            <span class="article-link-text">
              What is Automated Software Testing, and why should you do it?
            </span>
            <div class="arrow-right" aria-hidden="true">
              >
            </div>
          </a>
        </li>
      </ul>
    </main>
  </section>
</${Page}>
`
}
