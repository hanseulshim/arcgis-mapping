import FeatureLayer from 'esri/layers/FeatureLayer'

var template = {
  title: "Marriage in NY, Zip Code: {ZIP}",
  content: "<p>As of 2015, <b>{MARRIEDRATE}%</b> of the population in this zip code is married.</p>" +
    "<ul><li>{MARRIED_CY} people are married</li>" +
    "<li>{NEVMARR_CY} have never married</li>" +
    "<li>{DIVORCD_CY} are divorced</li></ul>",
  fieldInfos: [{
    fieldName: "MARRIED_CY",
    format: {
      digitSeparator: true, // Use a comma separator for large numbers
      places: 0 // Sets the number of decimal places to 0 and rounds up
    }
  }, {
    fieldName: "NEVMARR_CY",
    format: {
      digitSeparator: true,
      places: 0
    }
  }, {
    fieldName: "DIVORCD_CY",
    format: {
      digitSeparator: true,
      places: 0
    }
  }]
};

const demographic = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NYCDemographics1/FeatureServer/0",
  outFields: ["*"],
  popupTemplate: template
});

export default demographic
