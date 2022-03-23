

// Fetch the JSON data and console log it
d3.json("samples.json").then((data) => {
  let names = data.names;
  console.log(names);
  let metadata = data.metadata;
  console.log(metadata);
  let samples = data.samples;
  console.log(samples);
});
