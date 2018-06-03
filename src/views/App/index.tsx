import * as React from 'react'

import { Router } from '@reach/router'

import Notes from '../../components/Notes'
import TopNavigation from '../../components/TopNavigation'
import NoteCount from '../NoteCount'

const { Fragment } = React
const DevTools =
  process.env.NODE_ENV !== 'production' ? require('mobx-react-devtools').default : Fragment

export default () => {
  return (
    <div>
      <DevTools />
      <TopNavigation />
      <Router>
        <Notes path="/" />
        <NoteCount path="/notecount" />
      </Router>
    </div>
  )
}
