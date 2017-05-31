import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Features extends Component{
  handleClick(){
    console.log(this.props.map)
  }
  render(){
    return (
      <div>
        <Button onClick={() => this.handleClick()} bsStyle="primary">Boston Marathon</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
      </div>
    )
  }
}

export default Features
