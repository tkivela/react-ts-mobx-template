import { Provider } from 'mobx-react'
import * as React from 'react'

import store from './stores'
import App from './views/App'

const { Fragment } = React
const DevTools =
  process.env.NODE_ENV === 'development' ? require('mobx-react-devtools').default : Fragment

export default class extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <>
          <DevTools />
          <App />
        </>
      </Provider>
    )
  }
}
