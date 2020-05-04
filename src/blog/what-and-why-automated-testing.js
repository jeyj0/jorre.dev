const { html } = require('htm/preact')
const Page = require('../components/Page')

module.exports = () => html`
<${Page}
  title="What is Automated Software Testing and why should you do it? - Jannis Jorre"
  description="First in a series on Automated Software Testing. What is Automated Software Testing? Why should you do it? What are its benefits?"
>
  <section>
    <main>
      <h1>What is Automated Software Testing and why should you do it?</h1>
      <div class="content">
        <aside>
          This post is the first in a series of articles on automated
          software testing. You can find the whole list of upcoming and
          completed topics at <a href="/blog/series/testing">Series: Automated Software Testing</a>.
        </aside>
        <article>
          <section>
            <h1>What is Automated Software Testing</h1>
            <p>
              To answer this question, let's first break it down into
              easier-to-digest pieces:
              <ol>
                <li>What is Testing?</li>
                <li>What is Software Testing?</li>
                <li>What is Automated Software Testing?</li>
              </ol>
            </p>
            <section>
              <h1>What is Testing?</h1>
              <p>
                The process of making sure something works.
              </p>
            </section>
            <section>
              <h1>What is Software Testing?</h1>
              <p>
                Making sure the software works.
              </p>
            </section>
            <section>
              <h1>What is Automated Software Testing?</h1>
              <p>
                Automatically making sure the software works - without the
                need for manual checks.
              </p>
            </section>
          </section>
          <section>
            <h1>Why should you automate Software Testing?</h1>
          </section>
        </article>
      </div>
    </main>
  </section>
</${Page}>
`
