var energyMap = "data/choropleth-map.vg.json";
var co2Map = "data/choropleth-map-co2.vg.json";
var renewabilityMap = "data/choropleth-map-renewable.vg.json";

function energyToggle() {
    vegaEmbed("#choropleth_map", energyMap).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
       }).catch(console.error);
}

function co2Toggle() {
    vegaEmbed("#choropleth_map", co2Map).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
       }).catch(console.error);
}

function renewabilityToggle() {
    vegaEmbed("#choropleth_map", renewabilityMap).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
       }).catch(console.error);
}