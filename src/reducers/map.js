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
            layers: features
          }),
          extent: { // autocasts as new Extent()
            xmin: -13000000,
            ymin: 4247000,
            xmax: -9150000,
            ymax: 4247784,
            spatialReference: 102100
          }
        })
      }
    case 'TOGGLE_FEATURE':
      return {
        mapCtrl:{
          ...state.mapCtrl,
          map:{
            ...state.mapCtrl.map,
            layers:{
              ...state.mapCtrl.map.layers,
              items: action.items
            }
          }
        }
      }
    default:
      return state
  }
}

export default map;
