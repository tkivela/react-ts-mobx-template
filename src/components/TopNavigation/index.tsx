import { css } from 'emotion'
import { observer } from 'mobx-react'
import * as React from 'react'

import { Link } from '@reach/router'

import CustomButton, { blueButton, orangeButton } from '../../components/CustomButton'
import logo from './logo.svg'

const appStyles = css`
  font-family: sans-serif;
  text-align: center;

  img {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

interface IAppProps {
  addLatinNoteHandler: () => void
  addCounterNoteHandler: () => void
}

@observer
export default class extends React.Component<IAppProps> {
  public render() {
    return (
      <div className={appStyles}>
        <Link to="/">Notes page</Link>
        <p />
        <Link to="/notecount">Counts page</Link>
        <p />
        <header>
          <img src={logo} alt="logo" />
          <div>
            <CustomButton
              title="Add a latin note"
              colors={blueButton}
              onClickHandler={() => {
                this.props.addLatinNoteHandler()
              }}
            />
            <CustomButton
              title="Add a counter note"
              onClickHandler={() => {
                this.props.addCounterNoteHandler()
              }}
              colors={orangeButton}
            />
          </div>
        </header>
      </div>
    )
  }
}
