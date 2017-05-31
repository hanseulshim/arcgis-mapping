import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import FeatureLayer from 'esri/layers/FeatureLayer'
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
            xmin: -17570980.1213845,
            ymin: -4581917.34654093,
            xmax: 17074834.7168934,
            ymax: 8675820.74498175,
            spatialReference: 102100
          }

        })
      }
    case 'ADD_FEATURES':
      return Object.assign({}, state, {
        layers: [new FeatureLayer({
          url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Boston_Marathon/FeatureServer/0"
        })]
      })
    default:
      return state
  }
}

export default map;
