import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Root from './StateAndRouteProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Root />, div)
  ReactDOM.unmountComponentAtNode(div)
})
