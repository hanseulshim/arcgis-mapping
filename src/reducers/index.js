import { combineReducers } from 'redux';
import map from './map';
import counter from './counter';

const myApp = combineReducers({
  map,
  counter
});

export default myApp;
