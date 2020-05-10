const { html } = require('htm/preact')
const { Page } = require('../components/Page')

module.exports = {
  Renderable: () => html`
<${Page}
  title="The proper refactoring workflow - Jannis Jorre"
  description="Refactoring is an important part of every software developer's job. Not everyone does it correctly though. Here's my thoughts on the topic."
>
<main>

<h1>The proper refactoring workflow</h1>

<div class="content">

<a class="tldr-link" href="#step-by-step" aria-label="Activate to skip to step-by-step guide on refactoring">Step-by-Step guide at the bottom</a>

<aside>
This post is the second in a series of articles on automated
software testing and related topics. You can find the whole list of upcoming and
completed topics at <a href="/blog/series/testing">Series: Automated Software Testing</a>.
</aside>

<h2>Table of contents</h2>
<ol>
  <li><a href="#what-is-refactoring">What is refactoring?</a></li>
  <li><a href="#why-refactor">Why refactor?</a></li>
  <li><a href="#what-it-looks-like">What does refactoring look like?</a></li>
  <li><a href="#automatic-tests-and-refactoring">Why does refactoring require automatic tests?</a></li>
  <li><a href="#step-by-step">Refactoring - Step by Step</li></a>
</ol>

<article>

<h2 id="what-is-refactoring">What is refactoring?</h2>
<p>
Refactoring is part of every software developers job. But in case you haven't heard the term before, just need a refresh,
or simply want to hear my take on what it is, here's my interpretation on what I think it entails:
</p>
<p>
Refactoring is the process of cleaning up code.
</p>
<p>
Typically, when writing code, we developers try to get something working, without always knowing exactly how that's supposed to happen.
After a going in one direction, only to figure out that it wasn't entirely correct we go into another direction. Until at some point we
arrive at a working version. However, since we tried different approaches over time, fragments of these approaches can be found in that
working version.
</p>
<p>
Since these fragments were written at a point when the final solution to our problem may not have been entirely clear, they may not be
optimal anymore. Fragments that aren't ideal for the final solution are so-called "code-smells". Refactoring is the process of cleaning
up the code to get rid of these "code-smells".
</p>

<h2 id="why-refactor">Why refactor?</h2>
<p>
Okay, but we already have a working version - why should we touch the code again, risk that it doesn't work anymore, just to clean things
up?
</p>
<p>
Well, after a while another feature might be required for that part of the project, and you'll have to touch that code again. At that
point you might realize that you don't know what parts of the code do anymore, and the code is an unreadable mess. Don't worry, that's
normal, and doesn't make you a bad developer at all! But it is what refactoring is for, and why we do it.
</p>
<p>
When we need to touch a part of a project that we wrote some other time, maybe yesterday, maybe a week ago, maybe months ago, we still
want to be able to understand it. It's much easier to understand clean code, which was nicely refactored, than it is to understand smelly
code.
</p>
<p>
Most developers work in teams. In a team, refactoring is even more important, as you might have to work on code that you haven't
originally written. By refactoring the code you write, you make it much easier for other team-members to change that code without breaking
something that was already working.
</p>
<p>
It's also important to note that refactoring is only supposed to clean up implementation, and not change what code actually does.
That means that the code should do the same thing that it did before the refactoring happened. If you try to clean up code while also
implementing something new, I highly suggest splitting the tasks into two steps: first refactor, then implement. That way it's much easier
to stay sane and not get lost in your changes, ending up wondering what it was you wanted to do in the first place.
</p>

<h2 id="what-it-looks-like">What does refactoring look like?</h2>
<p>
Refactoring happens after something is considered working. It doesn't have to be a complete feature, but part of the code is working.
After implementing anything, I think it is important to take a step back, look at the code and see what parts might need improvement -
what parts contain 'code-smells' - what parts require refactoring?
</p>
<p>
After recognizing at least one of these issues, you should try to determine whether it's a big change, or a small change. If it's a big
change it's a good idea to break it into smaller changes to avoid breaking too much and having to revert all changes that were supposed
to clean up the code, because you can't get it to work anymore.
</p>
<p>
Let me give you an example: You might have written two functions that contain very similar logic - so you want to create a new logic that
abstracts away this part of both functions. It seems simple enough, but there's still potential to break something. Instead of doing
everything at once, what you should do instead is break it down into smaller changes and make sure things are still working in-between:
<ol>
  <li>Extract the logic from one of the two functions into a separate, third, function</li>
  <li>Use the new (third) function in the second function</li>
</ol>
That's the size of refactorings you should do. And between all of these tiny, incremental changes you should make sure everything's still
working. Other examples of steps might be (this list is by no means exhaustive):
<ul>
  <li>renaming a variable, function, class, type, or anything else</li>
  <li>re-ordering function parameters</li>
  <li>moving a function to a different file or class</li>
  <li>TODO: find more</li>
</ul>
</p>

<h2 id="automatic-tests-and-refactoring">Why does refactoring require automatic tests?</h2>
<p>
I think I made it clear that making sure things are still working between every little change you do while refactoring is important. If
you don't do that, you might end up having broken something, and then having to spend a lot of time figuring out what change actually
caused the code to break. If you however test after every little change, then you immediately notice if a change breaks your code and
are saved the time it takes to find the change. You can then either completely undo the change - and start fresh, or try to fix it. Both
options are simple to do and don't cost much time, since the change only took a couple of minutes at maximum anyways.
</p>
<p>
As I explained in my article <a href="/blog/what-and-why-automated-testing">"What is Automated Software Testing and why should you do
it?"</a>, automated testing can save a lot of manual labor and thereby time. This is especially true when talking about refactoring.
In the previous paragraph I explained why it's important to test after every little change - even if it seems trivial at first. If you
need to do all these tests manually, every single change will cost a lot of time, because you need to make sure everything works, and
therefore ideally test all features your project has. Not only that though, you'll also be very likely to miss something, or make some
mistake, and end up overlooking some issue.
</p>
<p>
Automated tests can solve these issues very nicely. By first writing a test that validates the behavior before the change, it is easy
to confidently make changes, test everything, and be sure that everything is still working as expected - or find that something isn't
working as it should. This does not only make refactoring a lot faster, but also a lot less daunting, because there's so much less to
keep track of.
</p>

<div class="tldr">
<h2 id="step-by-step">Refactoring - Step by Step</h2>
<p>
After all that talk, here's my step-by-step guide on refactoring:
<ol>
  <li>Find something that needs refactoring</li>
  <li>Break up the changes into small, manageable, easy-to-do, cheap-to-undo steps (and pick one to start with)</li>
  <li>Make sure there's enough tests that ensure the code you want to change works (execute them, to be sure they're green)</li>
  <li>Do the small change</li>
  <li>
    Make sure the tests are still green
    <ul>
      <li>If they're green then go ahead</li>
      <li>Else either undo all the changes, go back to 3., or try fixing the code</li>
    </ul>
  </li>
  <li>Make a commit (assuming you're using git)</li>
  <li>Repeat with the next change you have on your list, go to 1., or decide that you're done refactoring!</li>
</ol>
</p>
</div>
<p>
Step 6 ("make a commit") is useful, as it makes sure that you can always go back to a working state without loosing any of your refactoring
progress.
</p>
<p>
If you try following this workflow, but run into the issue that you have to change your tests for all of these little changes, then you're
probably writing a lot of "white-box" tests. These tests are completely fine, but they do not help with refactoring as much as "black-box"
tests do. Be on the lookout, as I'll write an article on the difference between the two and their respective advantages and disadvantages
in the future!
</p>
<p>
Don't forget to clean up after yourself, and have fun refactoring!
</p>

</article>

</div>
</main>
<//>
`
}
