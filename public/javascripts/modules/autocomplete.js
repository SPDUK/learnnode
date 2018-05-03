function autocomplete(input, latInput, lngInput) {
  // if(!input) return; // skip if there is no input on the page
  console.log(input, lngInput, latInput);
  const dropdown = new google.maps.places.Autocomplete(input);
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  // prevent submitting on the address field
  input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  })
}

export default autocomplete;