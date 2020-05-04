const { html } = require('htm/preact')
const Page = require('./components/Page')

module.exports = () => html`
<${Page} title="Jannis Jorre" description="Personal website of Jannis Jorre." menubar=${false}>
  <div class="top">
    <img class="circle" alt="Portrait of Jannis Jorre" src="/assets/profile.jpg" />
    <h1>Jannis Jorre</h1>
    <p>Software Engineer</p>
    <div class="socials">
      <a href="https://github.com/jeyj0">GitHub</a>
      <a href="https://twitter.com/jeyj0_plus">Twitter</a>
      <a href="mailto:jannis@jorre.dev">jannis@jorre.dev</a>
    </div>
  </div>
  <section>
    <main>
      <h1>Articles</h1>
      <div class="content">
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
      </div>
    </main>
  </section>
</${Page}>
`
