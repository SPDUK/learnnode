const axios = require('axios');

function typeAhead(search) {
  if(!search) return

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector('.search__results');
  
  searchInput.addEventListener('input', function() {
    // if there is no value, stop
    if(!this.value) {
      searchResults.style.display = 'none'
      return;
    }

    // show the results
    searchResults.style.display = 'block';
    axios.get(`/api/search?q=${this.value}`)
    .then(res => {
      if(res.data.length) {
        console.log('There is something to show!');
      }
    });
  });
};

export default typeAhead;
