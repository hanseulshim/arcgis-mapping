import React, { Component } from 'react';
import Features from '../components/features'

class FeaturesContainer extends Component{
  handleClick(index, items, toggleFeature, incrementCounter, decrementCounter){
    items[index].visible = !items[index].visible
    toggleFeature(items)
    items[index].visible
    ? incrementCounter()
    : decrementCounter()
  }
  render(){
    return (
      <Features
        items={this.props.items}
        handleClick={this.handleClick}
        toggleFeature={this.props.toggleFeature}
        incrementCounter={this.props.incrementCounter}
        decrementCounter={this.props.decrementCounter}
      />
    )
  }
}

export default FeaturesContainer
