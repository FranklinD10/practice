// Get user's current location
navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      getWeatherData(latitude, longitude);
    },
    (error) => {
      // Show location input if location cannot be determined automatically
      document.getElementById('location-input').style.display = 'block';
      document.getElementById('weather-data').innerHTML = '';
      console.error(`Error getting location: ${error.message}`);
    }
  );
  
  // Load previous locations from local storage
  const previousLocations = JSON.parse(localStorage.getItem('previousLocations')) || [];
  
  // Update datalist with previous locations
  const datalist = document.getElementById('locations');
  for (const location of previousLocations) {
    const option = document.createElement('option');
    option.value = location;
    datalist.appendChild(option);
  }
  
  async function getWeatherData(latitude, longitude) {
    // If latitude and longitude are not provided, get them from the entered location
    if (!latitude || !longitude) {
      const locationInput = document.getElementById('location');
      const location = locationInput.value;
  
      // Save entered location to local storage
      if (!previousLocations.includes(location)) {
        previousLocations.push(location);
        localStorage.setItem('previousLocations', JSON.stringify(previousLocations));
  
        // Update datalist with new location
        const option = document.createElement('option');
        option.value = location;
        datalist.appendChild(option);
      }
  
      // Geocode the location using OpenCage Geocoder
      const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        location
      )}&key=b849713f744543feafbb76ce6350b2f3`;
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();
      latitude = geocodeData.results[0].geometry.lat;
      longitude = geocodeData.results[0].geometry.lng;
    }
  
    const apiKey = '1423624ddc7cac49d3359928b068e77e';
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Extract the probability of rain
    const
  