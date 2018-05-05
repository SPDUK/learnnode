import axios from 'axios';


const mapOptions = {
  center: { lat: 43.255203, lng:-79.843826 },
  zoom: 13,
};

function loadPlaces(map, lat = 43.2, lng = -79.8) {
  axios.get(`/api/stores/near?lat=${lat}&lng=${lng}`)
  .then(res => {
    const places = res.data;
    if(!places.length) {
      alert('No places found');
      return;
    }
    const bounds = new google.maps.LatLngBounds();

    const markers = places.map(place => {
      const [placeLng, placeLat] = place.location.coordinates;
      const position = { lat: placeLat, lng: placeLng };
      bounds.extend(position);
      const marker = new google.maps.Marker({ map, position });
      marker.place = place;
      return marker;
    });
    // moves the map to the center of the map
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  });
};

function makeMap(mapDiv) {
  if(!mapDiv) return;
  // make our map
  const map = new google.maps.Map(mapDiv, mapOptions);
  loadPlaces(map);
  const input = document.querySelector('[name="geolocate"]');
  const autocomplete = new google.maps.places.Autocomplete(input);
  // console.log(input);
}

export default makeMap;