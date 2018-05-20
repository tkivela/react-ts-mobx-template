import * as React from 'react'
import * as ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import Root from './StateAndRouteProvider'

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
