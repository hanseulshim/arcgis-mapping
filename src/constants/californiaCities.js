import FeatureLayer from 'esri/layers/FeatureLayer'

var template = {
  title: "California Cities",
  content: "<p>City: {City}</p>"+
  "<p>Population: {Population}</p>"+
  "<p>Households: {Household}</p>"
};

var californiaCities = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/CaliforniaCities/FeatureServer/0",
  outFields: ["*"],
  popupTemplate: template,
  visible: false
});

export default californiaCities
