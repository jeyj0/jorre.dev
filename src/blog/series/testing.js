const { html } = require('htm/preact')
const { Page } = require('../../components/Page')

module.exports = {
  Renderable: () => html`
<${Page}
  title="Testing - Jannis Jorre"
  description="A list of blog-articles on Automated Software Testing, written by Jannis Jorre."
>
  <section>
    <main>
      <h1>Series: Automated Software Testing</h1>
      <div class="content">
        <article>
          <section>
            <h1>About this series</h1>
            <p>
              Originally in workshop-format, these articles should help anyone
              new to automated software testing to get started, and also to
              dive deeper.
            </p>
            <p>
              This series is aimed at different levels of software engineers,
              starting at beginner-friendly, up to intermediate-to-advanced.
              However, a basic understanding of concepts of programming is
              assumed in most articles.
            </p>
            <p>
              I try to keep this series programming-language agnostic. The
              occassional code example will be simple enough to understand
              from any programming background. If not, please tell me and I'll
              include a second, or a better one!
            </p>
          </section>
          <aside>
            Links lead to the article directly, topics that aren't linked yet
            still require the article on them to be written. Come back at some
            later point!
          </aside>
          <section>
            <h1>The Basics</h1>
            <p>
              <ol>
                <li>
                  <a href="/blog/what-and-why-automated-testing">
                    What is Automated Software Testing and why should you do it?
                  </a>
                </li>
                <li>
                  <span class="related">
                    The proper refactoring workflow
                  </span>
                </li>
                <li>
                  A minimal testing-example
                  <span class="subtitle">and what can be improved</span>
                </li>
                <li>
                  Test Granularities
                  <span class="subtitle">Unit-, Integration- and End-to-End Tests</span>
                </li>
                <li>
                  The three parts of any test
                  <span class="subtitle">Given, When, Then or Arrange, Act, Assert</span>
                </li>
                <li>
                  When should tests be executed?
                </li>
                <li>
                  Test-Driven-Development
                  <span class="subtitle">and Ping-Pong pair programming</span>
                </li>
                <li>
                  Black-box vs. White-box Testing
                </li>
                <li>
                  Test Doubles: Mocks, Stubs, Spies
                </li>
                <li>
                  The concept of testability
                  <span class="subtitle">or: How to write testable code</span>
                </li>
                <li>
                  Stuff that you should know but doesn't deserve it's own
                  article (yet?)
                  <span class="subtitle">A small glossary and rules of thumb</span>
                  <!-- Final practical considerations go here, along with test
                  suite and rules of thumb -->
                </li>
                <li>
                  What's enough?
                  <span class="subtitle">or: When should you stop writing tests?</span>
                  <ol>
                    <li>
                      Test Coverage
                      <span class="subtitle">Measuring test-suite usefulness</span>
                    </li>
                  </ol>
                </li>
                <li>
                  Testing Workflows
                  <ol>
                    <li>
                      Regression Testing
                      <span class="subtitle">Making sure you only have to fix that bug once</span>
                    </li>
                    <li>
                      Bug Hunting / Test-Debugging
                      <span class="subtitle">An alternative to classic
                      step-by-step-debugging and <code>console.log</code>-ing</span>
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
          </section>
          <section>
            <h1>Intermediate/Advanced</h1>
            <p>
              <ol>
                <li>
                  User Interface Testing
                  <ol>
                    <li>
                      Screenshot Testing
                    </li>
                    <li>
                      DOM and Snapshot Testing
                    </li>
                  </ol>
                </li>
                <li>
                  <span class="related">
                    Pattern: Dependency Injection
                  </span>
                  <ol>
                    <li>
                      How does Dependency Injection help with testing?
                    </li>
                  </ol>
                </li>
                <li>
                  The issue with Test Coverage
                  <span class="subtitle">or: Why mutation testing is awesome</span>
                </li>
                <li>
                  Smoke Tests
                </li>
              </ol>
            </p>
          </section>
        </article>
      </div>
    </main>
  </section>
</${Page}>
`
}
