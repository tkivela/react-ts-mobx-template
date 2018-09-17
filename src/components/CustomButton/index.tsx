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

export const redButton: IButtonColors = {
  backgroundColor: '#f92222',
  boxShadow: '#FF6509',
  hoverBackgroundColor: '#fa6666'
}

export const darkButton: IButtonColors = {
  backgroundColor: '#50573b;',
  boxShadow: '#6e09cd',
  hoverBackgroundColor: '#853cff'
}

const buttonStyle = (props) => css`
  border-radius: 5px;
  padding: 15px;
  font-size: 22px;
  margin: 10px;
  color: #fff;
  background-color: ${props.colors.backgroundColor};
  box-shadow: 0px 2px 0px 0px ${props.colors.boxShadow};

  :hover {
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
      <button className={buttonStyle(this.props)} onClick={this.props.onClickHandler}>
        {this.props.title}
      </button>
    )
  }
}
