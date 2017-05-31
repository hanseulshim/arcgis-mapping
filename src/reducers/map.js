import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import FeatureLayer from 'esri/layers/FeatureLayer'

const map = (state = { }, action) => {

  switch (action.type) {
    case 'CREATE_MAP':

      return {
        mapCtrl: new MapView({
          container: action.domNode,
          map: new EsriMap({
            basemap: 'hybrid',
            layers: [new FeatureLayer({
              url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Apple_Stores/FeatureServer/0"
            })]
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

    default:
      return state
  }
}

export default map;
