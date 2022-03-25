// CORS error when trying to import, so use url on github - it worked!
//const url = "https://raw.githubusercontent.com/norojordan/plotly-challenge/main/samples.json";
//d3.json(url).then((data) =>{
  //console.log(data)


//Create plots
function createplots(id) {
  // Fetch the JSON data and console log it. Make sure to start sever first!
  d3.json("samples.json").then((data) => {
    console.log(data)


  // Filter sample values by selected id
    let samples = data.samples;
    console.log(samples);
    let filteredsample = samples.filter(sample => sample.id === id)[0];
    console.log(filteredsample);

  // Slice the first 10 objects for plotting & reverse for Plotly
    let values = filteredsample.sample_values.slice(0, 10).reverse();
    let otuids = filteredsample.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
    let otulabels = filteredsample.otu_labels.slice(0, 10).reverse();
 
  // Trace 1 for the top 10 otus in an individual
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
    console.log(barData1)
    })
}; 
