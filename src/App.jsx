import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Helmet } from 'react-helmet'

// Code-splitting is automated for routes
import Home from './routes/Home'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Helmet>
          <meta name="Description" content="#TIL | Blog | Jannis Jorre" />
          <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" sizes="192x192" />
        </Helmet>

        <Router onChange={this.handleRoute}>
          <Home path="/" />
        </Router>
      </div>
    )
  }
}
