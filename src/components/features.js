import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Features extends Component{
  handleClick(index){
    this.props.toggleFeature(index)
  }
  render(){
    return (
      <div>
        <Button onClick={() => this.handleClick(0)} bsStyle="primary">Boston Marathon</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
      </div>
    )
  }
}

export default Features
