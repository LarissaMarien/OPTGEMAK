var map = L.map('map', {
  center: [51.210325, 4.658203],
  zoom: 15
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});

function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng).addTo(map)
		.bindPopup("Je bent hier!").openPopup();

  L.circle(e.latlng).setRadius(500).addTo(map).bindPopup("De cirkel heeft een radius van 1KM").click();
}

map.on('locationfound', onLocationFound);

basicmap.addTo(map);

map.locate({setView: true, maxZoom: 14});
