import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Features extends Component{
  handleClick(index, items){
    items[index].visible = !items[index].visible
    this.props.toggleFeature(items)
    items[index].visible
    ? this.props.incrementCounter()
    : this.props.decrementCounter()
  }
  render(){
    return (
      <div>
        <Button onClick={() => this.handleClick(0, this.props.items)} bsStyle="primary">Boston Marathon</Button>
        <Button onClick={() => this.handleClick(1, this.props.items)} bsStyle="primary">New York Demographic</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="primary">Primary</Button>
      </div>
    )
  }
}

export default Features
