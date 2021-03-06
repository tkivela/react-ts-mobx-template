import { css } from 'emotion'
import { observer } from 'mobx-react'
import * as React from 'react'

import CustomButton, {
  blueButton,
  darkButton,
  orangeButton,
  redButton
} from '../../components/CustomButton'

const appStyles = css`
  font-family: sans-serif;
  text-align: center;
  min-width: 300px;

  header {
    background-color: #d4cfcf;
    padding: 20px;
    color: white;
  }
`

interface IAppProps {
  addLatinNoteHandler: () => void
  addCounterNoteHandler: () => void
  notesPageButtonHandler: () => void
  noteCountsPageButtonHandler: () => void
  exampleErrorFromApiButtonHandler: () => void
}

@observer
export default class extends React.Component<IAppProps> {
  public render() {
    return (
      <div className={appStyles}>
        <CustomButton
          title="Notes page"
          colors={darkButton}
          onClickHandler={() => {
            this.props.notesPageButtonHandler()
          }}
        />
        <CustomButton
          title="Counts page"
          colors={darkButton}
          onClickHandler={() => {
            this.props.noteCountsPageButtonHandler()
          }}
        />
        <p />
        <header>
          <CustomButton
            title="Add a latin note"
            colors={blueButton}
            onClickHandler={() => {
              this.props.addLatinNoteHandler()
            }}
          />
          <CustomButton
            title="Add a counter note"
            colors={orangeButton}
            onClickHandler={() => {
              this.props.addCounterNoteHandler()
            }}
          />
          <CustomButton
            title="Cause error in API"
            colors={redButton}
            onClickHandler={() => {
              this.props.exampleErrorFromApiButtonHandler()
            }}
          />
        </header>
      </div>
    )
  }
}
