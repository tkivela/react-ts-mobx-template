import { css } from 'emotion'
import { inject, observer } from 'mobx-react'
import * as React from 'react'

import { NotesStore } from '../../stores'

const noteCountStyles = css`
  font-family: sans-serif;
  text-align: center;
`

interface INoteCountProps {
  path?: string
  notesStore?: NotesStore
}

@inject('notesStore')
@observer
export default class extends React.Component<INoteCountProps, any> {
  public render() {
    return (
      <div className={noteCountStyles}>
        <h1>You have created {this.props.notesStore!.notescount} notes.</h1>
      </div>
    )
  }
}
