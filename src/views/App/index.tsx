import { inject, observer } from 'mobx-react'
import * as React from 'react'

import TopNavigation from '../../components/TopNavigation'
import { NotesStore, ViewStore } from '../../stores'
import { VIEW } from '../../stores/view'
import NoteCount from '../NoteCount'
import Notes from '../Notes'

interface IAppProps {
  notesStore?: NotesStore
  viewStore?: ViewStore
}

@inject('notesStore')
@inject('viewStore')
@observer
export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <>
        <TopNavigation
          addLatinNoteHandler={() => {
            this.props.notesStore!.addLatinNoteAsync()
          }}
          addCounterNoteHandler={() => {
            this.props.notesStore!.addCounterNote()
          }}
          notesPageButtonHandler={() => {
            this.props.viewStore!.showNotesView()
          }}
          noteCountsPageButtonHandler={() => {
            this.props.viewStore!.showNoteCountView()
          }}
        />
        {this.renderView()}
      </>
    )
  }

  private renderView() {
    switch (this.props.viewStore!.currentView) {
      case VIEW.NOTES:
        return <Notes notes={this.props.notesStore!.notes} />
      case VIEW.NOTECOUNT:
        return <NoteCount notescount={this.props.notesStore!.notescount} />
      default:
        return <></>
    }
  }
}
