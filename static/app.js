// CORS error when trying to import, so use url on github - it worked!
const url = "https://raw.githubusercontent.com/norojordan/plotly-challenge/main/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then((data) => {
  console.log(data);
});

// Sort the data by id numbers
//let sortedsamples = data.sort((a, b) => b.id - a.id);
//console.log(sortedsamples)

// Filter sample values by selected id
let filteredSample = data.filter(samples => samples.id === id)[0];
console.log(filteredSample);

// Slice the first 10 objects for plotting
let values = filteredSample.sample_values.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedvalues = values.reverse();



// Trace 1 for the top 10 otus in an individual
let trace1 = {
  x: reversedvalues.map(object => object.id),
  y: reversedvalues.map(object => object.otuids),
  text: reversedvalues.map(object => object.otuids),
  type: "bar",
  orientation: "h",
  hovertext: "otulabels"

};

// Data trace array
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
title: "Top 10 OTU's for Individuals"
};






// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
