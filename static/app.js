// CORS error when trying to import, so use url on github - it worked!
const url = "https://raw.githubusercontent.com/norojordan/plotly-challenge/main/samples.json";
d3.json(url).then((data) =>{
  console.log(data);
});
// Promise Pending
//const data = d3.json(url);
//console.log("Data Promise: ", data);

// Fetch the JSON data and console log it

//console.log("After the promise consumption")



//Create plots
//function createPlots(id) {
  // Fetch the JSON data and console log it. Make sure to start sever first!
  //d3.json(url).then((data) =>{
    //console.log(data)
  
    // Filter sample values in samples array by selected id

    //let filteredSample = data.samples.filter(sample => sample.id === id)[0];
   // console.log("Filtered Sample:",filteredSample);
   

    // Slice the first 10 objects for plotting & reverse for Plotly
    //let values = filteredSample.sample_values.slice(0, 10).reverse();
    //let otuids = filteredSample.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
    //let otulabels = filteredSample.otu_labels.slice(0, 10).reverse();
 
   //Trace 1 for the top 10 otus in an individual
    //let trace1 = {
      //x: values,
      //y: otuids,
      //text: otuidslabels,
      //type: "bar",
      //orientation: "h",
      //hovertext: "otulabels"
    //};  

    // Data trace array
    //let barData1 = [trace1];

    // Apply a title to the layout
    //let layout1 = {
    //title: "Top 10 OTU's for Individuals"
    //};

    // Render the plot to the div tag with id "bar"
    //Plotly.newPlot("bar", barData1, layout1);
  //});
//}

function buildMetadataDisplay(sample){
  d3.json(url).then(function(data){
    let metadata = data.metadata;

    let sampleMetaData = metadata.filter(sampleObj => sampleObj.id == sample);

    if (sampleMetaData.length >0){
      let resultSample = sampleMetaData[0];
      let metaDataPanel = d3.select("#sample-metadata");

      // Clears out the screen
      metaDataPanel.html("");

      //const test = Object.entries(resultSample);

      Object.entries(resultSample).forEach(([key,value]) => {
        metaDataPanel.append("h6").text(`${key}: ${value}`);
      });
    } else {
      console.log("data error");
    } 
  });
}     
        
//console.log(`Meta: ${sample}`);


function buildCharts(sample){

  d3.json(url).then(function(data){
    let samples= data.samples;
    let filteredSample = samples.filter(sample => sample.id == id);
    //let sampleData = samples.filter((sampleObj) => sampleObj.id ==sample);
    
    if (filteredSample.length > 0){

       // Slice the first 10 objects for plotting & reverse for Plotly
       let result = filteredSample[0];
       let values = result.sample_values.slice(0, 10).reverse();
       let otuids = result.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
       let otulabels = result.otu_labels.slice(0, 10).reverse();
       //let result = sampleData[0];

       //let otu_ids = result.otu_ids;
       //let otu_labels = result.otu_labels;
       //let sample_values = result.sample_values;

       let bubbleData2 =[{
         x:  otuids,
         y: values,
         text: otulabels
       }]


      //Trace 1 for the top 10 otus in an individual
       let trace1 = {
        x: values,
        y: otuids,
        text: otulabels,
        type: "bar",
        orientation: "h",
        hovertext: "otu_labels"
    };  

    // Data trace array
      let barData1 = [trace1];

    // Apply a title to the layout
      let layout1 = {
      title: "Top 10 OTU's for Individuals"
      };

    // Render the plot to the div tag with id "bar"
      Plotly.newPlot("bar", barData1, layout1);
    };
    
  });
  //console.log(`Build: ${sample}`);

}


function init(){
  let dropdown = d3.select("#selDataset");
  
  d3.json(url).then(function(data){
    console.log(data);

    let ids = data.names;
    //console.log(names);

    for (id of ids){
      dropdown.append("option")
        .text(id)
        .property("value", id);
    }
    let firstSample = ids[0];
    optionChanged(firstSample);
    
  });

  
  //buildMetadataDisplay(0);

  //buildCharts(0);
}

function optionChanged(sample){
  buildCharts(sample);
  buildMetadataDisplay(sample);
}
init();