const { html } = require('htm/preact')
const { Page } = require('./components/Page')

module.exports = {
  Renderable: () => html`
<${Page} title="About - Jannis Jorre" description="About Jannis Jorre, the Software Developer." menubar=${true}>
    <section>
      <main>
        <h1>About me</h1>
        <div class="content">
          <article>
            <h1>Hobbies</h1>
            <section>
              <header>
                <h1>Ballroom Dancing</h1>
              </header>
              <p>
                In my free time, I go ballroom dancing two to four times a week,
                together with my girlfriend. Throughout the year, we take part
                in tournaments, and once a year we take part in the german season finale.
                We have even won multiple trophies there already!
              </p>
            </section>
            <section>
              <header>
                <h1>Magic: The Gathering</h1>
              </header>
              <p>
                I have always liked more complex games, with interesting
                interactions. Magic: The Gathering fulfills that perfectly,
                offering high flexibility with over 18000 available cards and a
                complex, strategic gameplay. I find it a lot of fun to
                figure out neat interactions, even combinations of
                cards that lead to infinite loops, but the occassional "running
                head first at your opponents" can be just as much fun.
              </p>
            </section>

            <h1>Work Experience</h1>
            <section>
              <header>
                <h1>
                  arcus(x) GmbH
                  <span class="subtitle">Since August 2018</span>
                </h1>
              </header>
              <p>
                At arcus(x) I am working fully independently and remotely as a Full-Stack Web Developer.
              </p>
              <p>
                At first I worked on refactoring an old legacy Angular 1.6.6
                codebase into a modern React codebase, while also implementing
                new features both in the frontend and the Java-Spring based backend.
              </p>
              <p>
                More recently I have started working on imgr.cloud/, a
                collaborative image gallery, built with React and NodeJS (Express).
              </p>
            </section>
            <section>
              <header>
                <h1>
                  bonprix Handelsgesellschaft mbH
                  <span class="subtitle">February 2018 - July 2018</span>
                </h1>
              </header>
              <p>
                At bonprix I mostly worked on the webshop, implementing new
                features and fixing bugs on a project with over 50 active developers.
              </p>
              <p>
                I was also working on some internal tools - including a complete
                refactoring of the "Deployment Dashboard".
              </p>
              <p>
                Our team was using Kanban, with a lot of inspiration from Scrum.
                Apart from the standup every morning, we held regular
                Retrospectives (some of which moderated by myself). Backlog
                Grooming was done, to ensure we would only work on relevant tasks.
              </p>
              <p>
                We developers made heavy use of pair programming and
                test-driven-development to raise our productivity. At the same
                time, regular code reviews ensured the quality of the code we wrote.
              </p>
            </section>
            <section>
              <header>
                <h1>
                  bonprix Handelsgesellschaft mbH
                  <span class="subtitle">August 2017 - October 2017</span>
                </h1>
              </header>
              <p>
                My first time at bonprix I was part of a scrum team working on
                the internal software-suite "d:suite" - a custom solution for
                in-house purchasing.
              </p>
              <p>
                The d:suite is built using Java and Spring Boot, utilizing the
                Vaadin framework used in a Model-View-Presenter pattern.
              </p>
              <p>
                During my time at bonprix, the pricecalculation module of
                d:suite was started. I worked on the technical conception.
              </p>
              <p>
                Unit- and integration-tests running in a docker-environment,
                along with code reviews ensured code quality and function.
              </p>
              <p>
                As a scrum team, we held regular retrospectives,
                spring-plannings and sprint-review meetings. To coordinate with
                development teams in bulgaria and india, we also held regular
                scrum-of-scrums meetings, where our teams would join a remote call.
              </p>
            </section>

            <h1>Education</h1>
            <section>
              <header>
                <h1>
                  CODE University of Applied Sciences
                  <span class="subtitle">Since September 2018</span>
                  <span class="subtitle">(ongoing) Bachelor of Sciences in
                  Software Engineering</span>
                </h1>
              </header>
              <p>
                CODE was very recently founded (I was part of the first
                applicants), and has a very modern and unusual approach to
                teaching. Us students work in cross-functional teams on real-life projects,
                learning by doing. We get the support we need to learn theory once we need it, or are
                interested in it. All the while the modules ensure we are
                well-versed in all important aspects of the study program of our choosing.
              </p>
            </section>
            <section>
              <header>
                <h1>
                  Gymnasium Grootmoor
                  <span class="subtitle">2015 - 2017</span>
                  <span class="subtitle">Abitur</span>
                </h1>
              </header>
            </section>
            <section>
              <header>
                <h1>
                  Year in Norway
                  <span class="subtitle">2014 - 2015</span>
                </h1>
              </header>
            </section>

            <h1>Languages</h1>
            <p>I am fluent in English, but my mother tongue is German!</p>
          </article>
        </div>
      </main>
    </section>
</${Page}>
`
}
