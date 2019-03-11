const mapboxgl = require("mapbox-gl");

const icons = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
};


const buildMarker = function(type,coordArray) {
    console.log(icons[type]);
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${icons[type]})`;
    const marker = new mapboxgl.Marker(markerDomEl).setLngLat(coordArray);
    return marker;
}

module.exports = buildMarker;