var map = L.map('map', {
  center: [51.210325, 4.658203]
});

var basicmap = L.tileLayer('https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=202db2b8cca0453498c2139dc0591c9d', {
	id: 'mapbox.streets'
});

function onLocationFound(e) {
	var radius = e.accuracy;

  var toiletpapier = L.icon({
      iconUrl: '/images/hiericoon.png',
      iconSize:     [35, 35],
      popupAnchor:  [0, -7]
    });

	L.marker(e.latlng, {icon: toiletpapier}).addTo(map)
		.bindPopup("Je bevindt je hier").openPopup();

  L.circle(e.latlng).setRadius(500).addTo(map).bindPopup("De cirkel heeft een radius van 1KM");
}

map.on('locationfound', onLocationFound);

basicmap.addTo(map);

map.locate({setView: true, maxZoom: 15});
