import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createMap, toggleFeature } from './actions/map';
import { incrementCounter, decrementCounter } from './actions/counter';
import Header from './components/header'
import Features from './components/features'

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl,
    counter: state.counter,
    toggled: state.toggled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    },
    toggleFeature: (index) => {
      dispatch(toggleFeature(index))
    },
    incrementCounter: () => {
      dispatch(incrementCounter())
    },
    decrementCounter: () => {
      dispatch(decrementCounter())
    }
  }
}

class App extends Component {
  componentDidMount() {

    if (!this.props.mapCtrl) {
      this.props.createMap(this.refs.mapView);
    }
  }
  render() {
    let feature =
      this.props.mapCtrl ?
      <Features
        items={this.props.mapCtrl.map.layers.items} toggleFeature={this.props.toggleFeature}
        incrementCounter={this.props.incrementCounter}
        decrementCounter={this.props.decrementCounter}
      />
      :
      <Features />
    return (
      <div className="App">
        <Header />
        <div ref='mapView' className='map-view'></div>
        {feature}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
