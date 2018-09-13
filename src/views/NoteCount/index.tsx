import { css } from 'emotion'
import { observer } from 'mobx-react'
import * as React from 'react'

const noteCountStyles = css`
  font-family: sans-serif;
  text-align: center;
`

interface INoteCountProps {
  notescount: number
}

@observer
export default class extends React.Component<INoteCountProps> {
  public render() {
    return (
      <div className={noteCountStyles}>
        <h1>You have created {this.props.notescount} notes.</h1>
      </div>
    )
  }
}
