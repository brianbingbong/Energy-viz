var vg_1 = "data/choropleth-map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "data/positive-negative-bar-chart.vg.json";
vegaEmbed("#positive-negative-bar-chart", vg_2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);