import { Provider } from 'mobx-react'
import * as React from 'react'

import store from './stores'
import App from './views/App'

export default class extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <App />
      </Provider>
    )
  }
}
