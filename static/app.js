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
function createPlots(id) {
  // Fetch the JSON data and console log it. Make sure to start sever first!
  d3.json(url).then((data) =>{
    console.log(data)
  
  // Filter sample values in samples array by selected id

     let filteredSample = data.samples.filter(sample => sample.id === id)[0];
     console.log("Filtered Sample:",filteredSample);
   

  // Slice the first 10 objects for plotting & reverse for Plotly
    let values = filteredSample.sample_values.slice(0, 10).reverse();
    let otuids = filteredSample.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
    //let otulabels = filteredSample.otu_labels.slice(0, 10).reverse();
 
   //Trace 1 for the top 10 otus in an individual
    let trace1 = {
      x: values,
      y: otuids,
      text: otuidslabels,
      type: "bar",
      orientation: "h",
      hovertext: "otulabels"
    };  

    // Data trace array
    let barData1 = [trace1];

    // Apply a title to the layout
    let layout1 = {
    title: "Top 10 OTU's for Individuals"
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", barData1, layout1);
  });
}
