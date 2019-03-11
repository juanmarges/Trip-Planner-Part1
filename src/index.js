const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoianVhbm1hcmdlcyIsImEiOiJjanQ0aW5sNTQyaHBvNDRxeGNuZXAxamF3In0.3Comub8XTB7PKR8nqAzUSQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker1 = buildMarker('restaurant',[-74.009151, 40.705086]);
marker1.addTo(map);
