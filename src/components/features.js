import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class Features extends Component{
  render(){
    return (
      <div>
        <Checkbox onClick={() => this.props.handleClick(0, this.props.items, this.props.toggleFeature, this.props.incrementCounter, this.props.decrementCounter)}>Boston Marathon</Checkbox>
        <Checkbox onClick={() => this.props.handleClick(1, this.props.items, this.props.toggleFeature, this.props.incrementCounter, this.props.decrementCounter)}>Apple Store Locations</Checkbox>
        <Checkbox onClick={() => this.props.handleClick(2, this.props.items, this.props.toggleFeature, this.props.incrementCounter, this.props.decrementCounter)}>California Cities</Checkbox>
      </div>
    )
  }
}

export default Features
