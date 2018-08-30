import { configure } from 'mobx'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import Root from './views/Root'

configure({ enforceActions: 'observed' })

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
