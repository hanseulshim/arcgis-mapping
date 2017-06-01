import React, { Component } from 'react';

class Counter extends Component{
  render(){
    return (
      <div>
        <h2>Features Selected: {this.props.selected}</h2>
      </div>
    )
  }
}

export default Counter
