import { inject, observer } from 'mobx-react'
import * as React from 'react'

import { Router } from '@reach/router'

import TopNavigation from '../../components/TopNavigation'
import { NotesStore } from '../../stores'
import NoteCount from '../NoteCount'
import Notes from '../Notes'

const { Fragment } = React
const DevTools =
  process.env.NODE_ENV !== 'production' ? require('mobx-react-devtools').default : Fragment

interface IAppProps {
  notesStore?: NotesStore
}

@inject('notesStore')
@observer
export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <DevTools />
        <TopNavigation
          addLatinNoteHandler={() => {
            this.props.notesStore!.addLatinNoteAsync()
          }}
          addCounterNoteHandler={() => {
            this.props.notesStore!.addCounterNote()
          }}
        />
        <Router>
          <Notes path="/" notes={this.props.notesStore!.notes} />
          <NoteCount path="/notecount" notescount={this.props.notesStore!.notescount} />
        </Router>
      </div>
    )
  }
}
