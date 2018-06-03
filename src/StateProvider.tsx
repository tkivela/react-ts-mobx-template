import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'

import store from './stores'
import App from './views/App'

configure({ enforceActions: true })

export default () => {
  return (
    <Provider {...store}>
      <App />
    </Provider>
  )
}
