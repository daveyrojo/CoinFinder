//<script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&region=JP"></script>

//<div id="map"></div>
//<input id="autocomplete" placeholder="Enter your address" type="text"></input>

var map;
function initMap(latIn, lngIn) {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: latIn, lng: lngIn }, zoom: 0,
      zoomControl: false
    });

    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        { types: ["geocode"],
          componentRestrictions: {'country': ['gb']},
          fields: ['place_id', 'geometry', 'formatted_address'] }
      );

      autocomplete.addListener("place_changed", addCustomerLocation);

  }

var addMarker = function(latIn, lngIn, labIn, name){ //Adds a new location with a given name, label, and location data
    var marker = new google.maps.Marker({
        position: { lat: latIn, lng: lngIn},
        label:labIn,
        title:name
    });

    marker.setMap(map);

}

function addCustomerLocation() { //Gets the location from the user's saved file
    // Get the place details from the autocomplete object.
    const userPlace = autocomplete.getPlace();
  
    // Add a marker to the map.
    const marker = new google.maps.Marker({
            map
          });
  
    marker.setLabel("YOU ARE HERE");
    marker.setPosition(userPlace.geometry.location);
  
    // Zoom the map to the marker.
    map.panTo(userPlace.geometry.location);
    map.setZoom(15);
    return [userPlace.geometry.location.latitude,userPlace.geometry.location.longitude ];
  }

var x = document.getElementById("INSERT NAME OF THING HERE");// name of something in the html

function getLocation() {
    if (navigator.geolocation) {
      var s = navigator.geolocation.getCurrentPosition();
      return [s.coords.latitude, s.coords.longitude];
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
      return addCustomerLocation();
    }
  }
  


  initMap(0,0);

  //whenever you get an input from coinmap, use addMarker