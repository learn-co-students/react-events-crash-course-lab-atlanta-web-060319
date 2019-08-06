import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  //This method should capture x and y coordinates of the mouse
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
handleKeyDown = (event) => {
  if(event.key == 'a'){
    resize('+')
  }else if (event.key === 's'){
    resize('-')
  }
}
  //Add event listner to the <canvas> element to capture a click
  //Create a event handler which fired invokes that provided 'toggleCycling'
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
