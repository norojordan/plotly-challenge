// Bonus - gauge chart

var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
      type: "indicator",
      mode: "gauge",
      delta: { reference: 1 },
      gauge: {
         axis: {range: [null, 9]},
         steps: [
            {range: [0, 1], 'color': 'cornsilk'},
            {range: [1, 2], 'color': 'antiquewhite'},
            {range: [2, 3], 'color': 'bisque'},    
            {range: [3, 4], 'color': 'khaki'},
            {range: [4, 5], 'color': 'tan'},
            {range: [5, 6], 'color': 'olive'},
            {range: [6, 7], 'color': 'lightgreen'},
            {range: [7, 8], 'color': 'darkseagreen'},
            {range: [8, 9], 'color': 'green'},
        ],
     }
    }
  ];
  
  var layout = { width: 600, height: 400 };
  Plotly.newPlot('gauge', data, layout);

  
  