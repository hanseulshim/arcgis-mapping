import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createMap, addFeatures } from './actions/map';
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
    addFeatures: (mapCtrl) => {
      dispatch(addFeatures(this.props.mapCtrl.map))
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
    return (
      <div className="App">
        <Header />
        <div ref='mapView' className='map-view'></div>
        <Features map={this.props.mapCtrl}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
