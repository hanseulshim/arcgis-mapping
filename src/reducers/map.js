import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import features from '../constants/features'
const map = (state = { }, action) => {

  switch (action.type) {
    case 'CREATE_MAP':
      return {
        mapCtrl: new MapView({
          container: action.domNode,
          map: new EsriMap({
            basemap: 'hybrid',
            layers: features,
            center: [-73.950, 40.702],
            zoom: 11
          })
        })
      }
    case 'TOGGLE_FEATURE':
      // return Object.assign({}, state, {
      //   mapCtrl.map.layers.items[action.index].visible: !state.mapCtrl.map.layers.items[action.index].visible
      // })
      return {
        mapCtrl:{
          ...state.mapCtrl,
          map:{
            ...state.mapCtrl.map,
            layers:{
              ...state.mapCtrl.map.layers,
              items:{
                [action.index] : {
                  ...state.mapCtrl.map.layers.items[action.index],
                  visible: true
                }
              }
                // state.mapCtrl.map.layers.items.map((item, index) =>
                //   index === action.index
                //   ? {...item, visible:false}
                //   : item
                // )

            }
          }
        }
      }
    default:
      return state
  }
}

export default map;
