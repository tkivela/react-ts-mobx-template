import { inject, observer } from 'mobx-react'
import * as React from 'react'

import { AppStore } from '../../stores'
import Note from '../Note'

interface INotesProps {
  appStore?: AppStore
}

@inject('appStore')
@observer
class Notes extends React.Component<INotesProps, any> {
  public render() {
    return this.props.appStore!.notes.map(note => (
      <Note key={note.id} text={note.title} color={note.color} />
    ))
  }
}

export default Notes
