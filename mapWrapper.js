let arrMarkers = [];

const MapWrapper = function(container, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  this.map.on("click", function(event){
    // let coords = [event.latlng.lat, event.latlng.lng]
    // this.setView(coords, 11);
    // this.addMarker(coords);
  }.bind(this))
};

// can optionally bind a popup when adding marker
MapWrapper.prototype.addMarker = function(lat, lng){
  marker = L.marker([lat, long]).addTo(this.map);
  const str = "Popup text if we need it"
  marker.bindPopup(str);
  arrMarkers.push(marker);
};

// sets the view and zoom
MapWrapper.prototype.setView = function(lat, lng, zoom){
  this.map.setView(new L.LatLng(lat, lng, zoom);
};

// adds a discrete popup at coords lat, lng
MapWrapper.prototype.addPopup = function(lat, lng, string){
  // var popup = L.popup({ autoClose: false })
  var popup = L.popup()
      .setLatLng(lat, lng)
      .setContent(string)
      .openOn(this.map);
};

// Adds a red circle - if required
MapWrapper.prototype.addCircle = function(coords){
  var circle = L.circle(coords, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500000
}).addTo(this.map);
};

// If we need to target a specific marker
MapWrapper.prototype.openPop = function(latitude, longitude){
  const targetMarker = _.filter(arrMarkers, { '_latlng': {lat: latitude, lng: longitude}});
  targetMarker[0].openPopup();
};
