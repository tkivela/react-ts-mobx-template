import { css } from 'emotion'
import { observer } from 'mobx-react'
import * as React from 'react'

export interface IButtonColors {
  backgroundColor: string
  boxShadow: string
  hoverBackgroundColor: string
}

export const blueButton: IButtonColors = {
  backgroundColor: '#55acee',
  boxShadow: '#3C93D5',
  hoverBackgroundColor: '#6FC6FF'
}

export const orangeButton: IButtonColors = {
  backgroundColor: '#e67e22',
  boxShadow: '#CD6509',
  hoverBackgroundColor: '#FF983C'
}

const buttonStyle = (props) => css`
  body {
    font-family: 'sans-serif';
  }
  display: inline;

  .btn {
    border-radius: 5px;
    padding: 15px;
    font-size: 22px;
    margin: 10px;
    color: #fff;
    display: inline-block;
    background-color: ${props.colors.backgroundColor};
    box-shadow: 0px 5px 0px 0px ${props.colors.boxShadow};
  }

  .btn:hover {
    background-color: ${props.colors.hoverBackgroundColor};
  }
`

interface ICustomButton {
  title: string
  onClickHandler: () => void
  colors: IButtonColors
}

@observer
export default class extends React.Component<ICustomButton> {
  public render() {
    return (
      <div className={buttonStyle(this.props)} onClick={this.props.onClickHandler}>
        <div className="btn">{this.props.title}</div>
      </div>
    )
  }
}
