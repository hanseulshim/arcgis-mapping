import FeatureLayer from 'esri/layers/FeatureLayer'

const bostonMarathon = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Boston_Marathon/FeatureServer/0"
})

const features = [bostonMarathon]
export default features
