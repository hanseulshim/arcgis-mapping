import FeatureLayer from 'esri/layers/FeatureLayer'

var template = {
  title: "Apple Store Locations",
  content: "<p>Store: {Store}</p>" +
  "<p>Address: {Address}</p>"+
  "<p>Store Link: <a target=_blank href={Store_Page_Link}>{Store_Page_Link}</a></p>"+
  "<img src={Image_Link} width='200px'/>"
};

const appleStores = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Apple_Stores/FeatureServer/0",
  outFields: ["*"],
  popupTemplate: template,
  visible: false
});

export default appleStores
