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
            basemap: 'gray',
            layers: features
          }),
          extent: { // autocasts as new Extent()
            xmin: -17570980.1213845,
            ymin: -4581917.34654093,
            xmax: 17074834.7168934,
            ymax: 8675820.74498175,
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
