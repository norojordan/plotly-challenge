// Get the Roadster endpoint
const navels = "https://robdunnlab.com/projects/belly-button-biodiversity/";

// Fetch the JSON data and console log it
d3.json(navels).then(function(samples) {
  console.log(samples);
});