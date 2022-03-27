// Bonus - gauge chart

var data = [
    {
      domain: { x: [0, 2], y: [0, 1] },
      value: arrow,
      title: { text: "Belly Button Washing Frequency" },
      subtitle: {text:"Scrubs per Week"},
      type: "indicator",
      mode: "gauge",
      delta: { reference: 1 },
      gauge: {
        'axis': {'range': [null, 10]},
        'bgcolor': "white",
        'steps': [
            {'range': [0, 1], 'color': 'bone'},
            {'range': [1, 2], 'color': 'tan'},
            {'range': [2, 3], 'color': 'brown'},    
            {'range': [3, 4], 'color': 'yellow'},
            {'range': [4, 5], 'color': 'green'},
            {'range': [5, 6], 'color': 'blue'},
            {'range': [6, 7], 'color': 'orange'},
            {'range': [7, 8], 'color': 'red'},
            {'range': [8, 9], 'color': 'purple'},
        ],
     }
    }
  ];
  
  var layout = { width: 600, height: 400 };
  Plotly.newPlot('gauge', data, layout);

  
  