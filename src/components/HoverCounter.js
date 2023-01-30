import React, { Component } from 'react'
import CounterWrapper from '../utls/counterWrapper';

class HoverCounter extends Component {

  render() {
    return (
      <div>
        <h1>CountHover: {this.props.count}</h1>
        <button onMouseOver={()=> this.props.increaseCounter}>hoverCount</button>
      </div>
    )
  }
}
export default CounterWrapper(HoverCounter,10)