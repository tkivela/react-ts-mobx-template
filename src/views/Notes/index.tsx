import { observer } from 'mobx-react'
import * as React from 'react'

import Note from '../../components/Note'
import { INote } from '../../stores/notes'

interface INotesProps {
  path?: string
  notes: INote[]
}

@observer
export default class Notes extends React.Component<INotesProps> {
  public render() {
    return this.props.notes.map((note) => <Note key={note.id} note={note} />)
  }
}
