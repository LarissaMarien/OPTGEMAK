var map = L.map('map', {
  center: [51.210325, 4.658203],
  zoom: 13
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});

function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng).addTo(map)
		.bindPopup("Je bent hier!").openPopup();
}

var circle = L.circle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500
}).addTo(map);

map.on('locationfound', onLocationFound);

basicmap.addTo(map);

map.locate({setView: true, maxZoom: 14});
