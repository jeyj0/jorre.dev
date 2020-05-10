const { html } = require('htm/preact')
const { Page } = require('../components/Page')

module.exports = {
  Renderable: () => html`
<${Page}
  title="What is Automated Software Testing and why should you do it? - Jannis Jorre"
  description="First in a series on Automated Software Testing. What is Automated Software Testing? Why should you do it? What are its benefits?"
>
  <section>
    <main>
      <h1>What is Automated Software Testing and why should you do it?</h1>
      <div class="content">
        <a class="tldr-link" href="#tldr" aria-label="Activate to skip to short summary">Tl;dr at the bottom</a>
        <aside>
          This post is the first in a series of articles on automated
          software testing. You can find the whole list of upcoming and
          completed topics at <a href="/blog/series/testing">Series: Automated Software Testing</a>.
        </aside>
        <section>
          <h1>Table of contents</h1>
          <ol>
            <li>
              <a href="#what-is-automated-software-testing">What is Automated Software Testing?</a>
              <ol>
                <li><a href="#what-is-testing">What is Testing?</a></li>
                <li><a href="#what-is-software-testing">What is Software Testing and why do it?</a></li>
                <li><a href="#what-is-automated-software-testing">What is Automated Software Testing?</a></li>
              </ol>
            </li>
            <li>
              <a href="#why-automate-software-testing">Why should you automate Software Testing?</a>
            </li>
            <li><a href="#tldr">Tl;dr</a></li>
          </ol>
        </section>
        <article>
          <section>
            <h1 id="what-is-automated-software-testing">What is Automated Software Testing?</h1>
            <p>
              To answer this question, I've broken it down into easier to answer pieces.
            </p>
            <section>
              <h1 id="what-is-testing">What is Testing?</h1>
              <p>
                Dictionary.com defines "test" as:
                <blockquote>
                  test [test] (noun)
                  <ol>
                    <li>the means by which the presence, quality, or genuineness of anything is determined; a means of trial.</li>
                    <li>the trial of the quality of something: to put to the test.</li>
                    <li>a particular process or method for trying or assessing.</li>
                    <li>
                      a set of questions, problems, or the like, used as a means of evaluating the abilities, aptitudes, skills,
                      or performance of an individual or group; examination.
                    </li>
                  </ol>
                </blockquote>
                By extracting the parts that are relevant in this context, I arrive at the following definition:
                <blockquote>
                test (noun):
                a particular process or method for assessing the presence, quality or genuineness of anything
                </blockquote>
                This means, testing can be considered as a pre-defined set of steps (process), which determines whether something exists, or works.
              </p>
            </section>
            <section>
              <h1 id="what-is-software-testing">What is Software Testing and why do it?</h1>
              <p>
                Building on the definition above, Software Testing is the process of making sure that the Software someone wrote works.
                Usually, developers do that right after they did an attempt at implementing a new feature, or fixing a bug. Without
                checking that the software works, you cannot be sure that it does - therefore you test.
              </p>
              <p>
                I want to stress the point of calling testing a "process": by calling it as such, I want to emphasize that to test software, you need a pre-defined set of steps
                and expectations. If you don't have pre-defined steps, you cannot reproduce the same behavior again, which makes writing software for it hard. An example for one
                of these processes could be:
                <ol>
                  <li>Assuming a user with the email "john.doe@example.com" and the password "myawesomepassword123" exists:</li>
                  <li>Go to /login</li>
                  <li>Enter "john.doe@example.com" into the "email" field</li>
                  <li>Enter "myawesomepassword123" into the "password" field</li>
                  <li>Click on "Login"</li>
                  <li>You should be successfully logged in (meaning you see your John Doe's Dashboard)</li>
                </ol>
                These steps are easy to follow and give a clear result: either you see the dashboard - meaning it works - or you don't - meaning it doesn't work.
              </p>
              <p>
                Now let's imagine a situation in which the steps aren't clearly defined. You write some code, but you aren't sure whether it works. You want to test
                whether it does, so you do something to test it. If it works, cool - but does it actually do what it's supposed to do, or did you simply test the case
                that you thought most likely works? Or it doesn't work, in which case you do some code changes, want to check whether it works now, but you can't do the
                exact same thing as last time again - because the steps aren't defined (in this case you might remember them correctly, but you can't be sure that you do).
              </p>
            </section>
            <section>
              <h1>What is Automated Software Testing?</h1>
              <p>
                So now that we know what software testing is - what is automated software testing? By now you might be able to imply it from its name. In automated
                software testing, the exact same pre-defined steps as in manual software testing are done - with the difference that it's not a human doing them, but
                rather a computer. It also gives a few more options and abilities to the tester.
              </p>
            </section>
          </section>
          <section>
            <h1 id="why-automate-software-testing">Why should you automate Software Testing?</h1>
            <p>
              Just to clarify: the question is not why you should test at all (I hope that is self-explanatory), rather why that process should be automated.
            </p>
            <p>
              To answer this question, we can first ask: why should we automate anything? My personal answer is, that automation saves a lot of work. If we take the login
              example from above, we can already see automation become valuable. Let's imagine it takes 5 seconds to do one of those test-runs - meaning going through all
              the steps I mentioned - when doing it manually. Since it's a login, we probably won't be able to finish it on the first attempt. If we are just a bit practiced
              in automated tests, we should be able to write an automated test for this in about 1-2 minutes. That means we need to test the login at worst 24 times
              to take equal amounts of time. Once we test the login a 25th time, we'll have saved five seconds!
            </p>
            <p>
              Now you might say that 25 times is quite a lot. But I'd disagree. Because we don't want to only test this until we have finished the login. Every time we
              write a new feature or fix some bug, we should ideally test all features that were implemented before - just so that we can be sure we didn't break anything
              while building that new thing. So unless the project only consists of the login and nothing else, I doubt that you're going to stay at 24 times testing.
            </p>
            <p>
              Of course, if you don't have automated tests, you might not actually test all features every time you edit your code - but that's the beauty of automating
              the tests: it doesn't really cost you anything, so you might as well!
            </p>
            <p>
              Speaking of costs - imagine you're working on some production-critical code, instead of just some side-project (which for a lot of you should be true).
              Creating a bug could cost a lot of money! Therefore, regular tests should be done. Instead of hiring a lot of manual-testers, most of the tests can be
              automated. That isn't only cheaper, but also faster and more reliable!
            </p>
            <p>
              Until now, all reasons I gave were simple improvements on another way of doing it (manually), without adding any additional benefits. However, there's
              reasons to automate testing, that you can't easily replicate with manual tests:
              <ul>
                <li>it shows you <strong>where</strong> a bug is, not only whether there is one</li>
                <li>it allows continuous delivery</li>
                <li>it documents code</li>
              </ul>
              <section>
                <h1>It shows you where a bug is, not only whether there is one</h1>
                <p>
                  If you have enough tests, different tests will be responsible for testing different parts of your software. That means that if part of the software
                  breaks, the tests for that specific part will fail - not all of them. That is a very helpful starting point to find the source of the bug.
                </p>
              </section>
              <section>
                <h1>It allows continuous delivery</h1>
                <p>
                  Continuous Delivery describes the ability to get any change to software immediately to production, without manual intervention. In most cases, only
                  versions of the software that aren't faulty should go to production. If we don't have manual tests, we therefore need the option to either manually
                  say "yes, I want to deploy", or "no, I don't want to deploy". However, since that's a manual step, we would not have proper continuous delivery.
                  With automated tests, that question can be answered by the tests: if the tests succeed, deploy the new version. If the the test fail, don't deploy.
                  <aside>I will not go into the advantages and risks of continuous delivery in this post, as it is out of scope. Maybe in the future...</aside>
                </p>
              </section>
              <section>
                <h1>It documents code</h1>
                <p>
                  Automated tests have the added benefit of serving as documentation for what parts of the code should do, and whether they actually do it. A test to
                  test the login functionality has the nice side-effect of documenting how the login-process works, and how it should behave, as all steps need to be
                  defined for the test to pass.
                </p>
                <p>
                  Documentation works without tests as well of course, but documentation through tests has one major advantage: it will always be up-to-date. If the
                  behavior of the code changes - and therefore the original documentation becomes obsolete, documentation in form of tests will fail and will have to
                  be updated. Traditional, text-based documentation might be forgotten about to be updated, and will - over time - not represent the actual code anymore.
                </p>
                <p>
                  Before you say it: yes, I know, some programming languages are able to ensure code-examples in comments are still valid - but I'd argue that's a form
                  of automated software testing, so it completely follows my opinion!
                </p>
                <p>
                  I should also note though that there are exceptions where traditional documentation works much better than automated tests, as the concept might be
                  much easier to display in non-code-format. However, these tend to be things on software architectural level, which change much less frequently than
                  actual implementation logic.
                </p>
              </section>
            </p>
          </section>
          <section class="tldr">
            <h1 id="tldr">Tl;dr</h1>
            <ul>
              <li>Testing something means using a pre-defined process to make sure it works</li>
              <li>We test software so that we can be sure it does what we expect and want it to do</li>
              <li>
                We automate software testing to:
                <ul>
                  <li>save manual labor and thereby time and money</li>
                  <li>be told where a bug is caused, not only whether there is one</li>
                  <li>document code</li>
                  <li>be able to do continuous delivery</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <p>
              Last but not least: always remember that even the best test-suite cannot ensure 0 bugs - it can only find some.
            </p>
          </section>
        </article>
      </div>
    </main>
  </section>
</${Page}>
`
}
