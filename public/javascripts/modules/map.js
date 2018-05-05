import axios from 'axios';


const mapOptions = {
  center: { lat: 43.2, lng: -79.8},
  zoom: 9,
};

function loadPlaces(map, lat = 43.2, lng = -79.8) {
  
}

function makeMap(mapDiv) {
  if(!mapDiv) return;
  // make our map
  const map = new google.maps.Map(mapDiv, mapOptions);
  const input = document.querySelector('[name="geolocate"]');
  const autocomplete = new google.maps.places.Autocomplete(input);
  // console.log(input);
}

export default makeMap;