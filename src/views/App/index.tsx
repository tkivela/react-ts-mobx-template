import * as React from 'react'
import { Route } from 'react-router-dom'

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
      <Route exact={true} path="/" component={Notes} />
      <Route path="/notecount" component={NoteCount} />
    </div>
  )
}
