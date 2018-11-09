import React, { Component } from 'react';
import './color-buttons.css';

const colors = { blue: 'blue', red: 'red', yellow: 'yellow', green: 'green' };

export default class DevtoolsOpening extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: ''
    }
  }

  setColor(color) {
    this.setState({ currentColor: color });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <>
        <div className={"colored-text " + currentColor}>Color me!</div>
        <div className="buttons">
          <div className={'colored-button ' + colors.blue} onClick={this.setColor.bind(this, colors.blue)}></div>
          <div className={'colored-button ' + colors.red} onClick={this.setColor.bind(this, colors.red)}></div>
          <div className={'colored-button ' + colors.yellow} onClick={this.setColor.bind(this, colors.yellow)}></div>
          <div className={'colored-button ' + colors.green} onClick={this.setColor.bind(this, colors.green)}></div>
        </div>
      </>
    )
  }
};