const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';


      async function whereISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

      //  marker.setLatLng([latitude, longitude]);

        document.getElementById('lat').textContent = latitude.toFixed(3);
        document.getElementById('lon').textContent = longitude.toFixed(3);
      }
      whereISS();

      setInterval(whereISS, 5000);    // how often reloads