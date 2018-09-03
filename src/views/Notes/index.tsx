import { inject, observer } from 'mobx-react'
import * as React from 'react'

import Note from '../../components/Note'
import { NotesStore } from '../../stores'

interface INotesProps {
  path?: string
  notesStore?: NotesStore
}

@inject('notesStore')
@observer
export default class Notes extends React.Component<INotesProps> {
  public render() {
    return this.props.notesStore!.notes.map((note) => (
      <Note key={note.id} text={note.title} color={note.color} />
    ))
  }
}
