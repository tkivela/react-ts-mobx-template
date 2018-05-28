import { createBrowserHistory } from 'history'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import * as React from 'react'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'

import store from './stores'
import App from './views/App'

configure({ enforceActions: true })

export default () => {
  const browserHistory = createBrowserHistory()
  const history = syncHistoryWithStore(browserHistory, new RouterStore())

  return (
    <Provider {...store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  )
}
