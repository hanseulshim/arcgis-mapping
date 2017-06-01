import FeatureLayer from 'esri/layers/FeatureLayer'

var template = {
  title: "Boston Marathon 2013",
  content: "{STATE_NAME}:  {Percent_Fi} of starters finished",
  fieldInfos: [{
    fieldName: "Number_Ent",
      label: "Entrants"
    },{
      fieldName: "Number_Sta",
      label: "Starters"
    },{
      fieldName: "Number_Fin",
      label: "Finishers"
    }],
    mediaInfos:[{ //define the bar chart
      caption: "",
      type:"barchart",
      value:{
        theme: "Dollar",
        fields:["Number_Ent","Number_Sta","Number_Fin"]
      }
  }]
};

var bostonMarathon = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Boston_Marathon/FeatureServer/0",
  outFields: ["*"],
  popupTemplate: template
});

export default bostonMarathon
