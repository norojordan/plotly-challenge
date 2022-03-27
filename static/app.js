// CORS error when trying to import, so use url on github - it worked!
const url =
  "https://raw.githubusercontent.com/norojordan/plotly-challenge/main/samples.json";
d3.json(url).then((data) => {
  console.log(data);
});

function buildDemoDisplay(sample) {
  d3.json(url).then((data) => {
   
    let metadata = data.metadata;

    let filteredMetaData = metadata.filter((sampleOBJ) => sampleOBJ.id == sample);

    if (filteredMetaData.length > 0) {
      let resultSample = filteredMetaData[0];
      let metaDataPanel = d3.select("#sample-metadata");

      // Clears out the screen
      metaDataPanel.html("");

      Object.entries(resultSample).forEach(([key, value]) => {
        metaDataPanel.append("h6").text(`${key}: ${value}`);
      });
    } else {
      console.log("data error");
    }
  });
}


//Create plots
function createPlots(id) {
  // Fetch the JSON data and console log it. Make sure to start sever first!
  d3.json(url).then((data) => {
    console.log(data);

    // Filter sample values in samples array by selected id
    let filteredSample = data.samples.filter((sample) => sample.id === id)[0];
    // console.log("Filtered Sample:",filteredSample);

    // Slice the first 10 objects for plotting & reverse for Plotly
    let values = filteredSample.sample_values.slice(0, 10).reverse();
    let otuids = filteredSample.otu_ids
      .map((otuid) => `OTU ${otuid}`)
      .slice(0, 10)
      .reverse();
    let otulabels = filteredSample.otu_labels.slice(0, 10).reverse();

    //Trace 1 for the top 10 otus in an individual
    let trace1 = {
      x: values,
      y: otuids,
      text: otulabels,
      type: "bar",
      orientation: "h",
      hovertext: "otulabels",
    };

    // Data trace array
    let barData1 = [trace1];

    // Apply a title to the layout
    let layout1 = {
      title: "Top 10 OTU's for Individuals",
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", barData1, layout1);

    let trace2 = {
      x: filteredSample.otu_ids,
      y: filteredSample.sample_values,
      mode: "markers",
      marker: {
        size: filteredSample.sample_values,
        color: filteredSample.otu_ids,
      },
      text: filteredSample.otu_labels,
    };

    let layout2 = {
      title: "Bubble Chart",
      xaxis: {
        title: "OTU ID"
      },
    };
    let bubbleData2 = [trace2];
    Plotly.newPlot("bubble", bubbleData2, layout2);
  });
}


// Create the default page
function init() {
  let dropdown = d3.select("#selDataset");

  d3.json(url).then(function (data) {
    let ids = data.names;

    for (id of ids) {
      dropdown.append("option").text(id).property("value", id);
    }

    let firstID = ids[0];
    optionChanged(firstID);
  });
}

// When ID dropdown changes, get the new data and rebuild the plots
function optionChanged(newID) {
  createPlots(newID);
  buildDemoDisplay(newID);
}

init();
