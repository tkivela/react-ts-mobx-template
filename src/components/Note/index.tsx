import { css } from 'emotion'
import { observer } from 'mobx-react'
import * as React from 'react'

import { INote } from '../../stores/notes'

const noteStyle = (props) => css`
  font-size: 1.25em;

  width: 20%;
  height: 140px;
  float: left;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(${props.note.color.r}, ${props.note.color.g}, ${props.note.color.b});

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px {
    font-family: sans-serif;
  }
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
`

interface INoteProps {
  note: INote
}

@observer
export default class extends React.Component<INoteProps> {
  public render() {
    return (
      <div className={noteStyle(this.props)}>
        {this.props.note.content.state === 'pending' ? <i>loading...</i> : null}

        {this.props.note.content.state === 'fulfilled' ? this.props.note.content.value.name : null}

        {this.props.note.content.state === 'rejected' ? 'Error fetching the note' : null}
      </div>
    )
  }
}
