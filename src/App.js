import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createMap, toggleFeature } from './actions/map';
import Header from './components/header'
import Features from './components/features'

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    },
    toggleFeature: (index) => {
      dispatch(toggleFeature(index))
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
      <Features map={this.props.mapCtrl.map} toggleFeature={this.props.toggleFeature}/>
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
