import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Page from './components/Page'

// Code-splitting is automated for routes
import Home from './routes/Home'
import CheatSheets from './routes/CheatSheets'
import Error404 from './routes/Error404'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
    this.setState({ currentUrl: e.url })
  }

  render({}, { currentUrl }) {
    return (
      <Page currentUrl={currentUrl}>
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <CheatSheets path="/cheatsheets" />
          <Error404 default />
        </Router>
      </Page>
    )
  }
}
