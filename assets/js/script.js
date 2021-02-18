var resultsElement = document.querySelector("#list") ///need div 
//latitude = 69 miles
//longitude = 54.6 miles
var searchButton = document.querySelector('#searchButton');
var locButton = document.querySelector('#addLocation');
var radInput = document.querySelector('#radius');
var minLat = 40;
var maxLat = 42;
var minLon = -75;
var maxLon = -74;
var lat = 0;
var lon = 0;
var searchRadius = 1;

var userInput = function (userLat, userLon, radius) {
  if (searchRadius <= 0) {
    // console.log('Radius is not positive');
    return;
  }
  // console.log(userLat + " " + userLon + " " + searchRadius);
  minLat = userLat - searchRadius / 69.0;
  maxLat = userLat + searchRadius / 69.0;
  minLon = userLon - searchRadius / 54.6;
  maxLon = userLon + searchRadius / 54.6;

  const marker = new google.maps.Marker({
    map,
    //color: blue, 
    position: { lat: userLat, lng: userLon },
    label: "You are here"
  });

}

//searches for valid locations
searchButton.addEventListener('click', function () {
  var searchQuery = 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=' + minLat.toFixed(4) + '&lon1=' + minLon.toFixed(4) + '&lat2=' + maxLat.toFixed(4) + '&lon2=' + maxLon.toFixed(4);
  console.log(minLat, maxLat, minLon, maxLon);
  console.log(searchQuery);
  fetch(searchQuery)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log('-----------------');
      venueObj = data.venues;
      for (let i = 0; i < venueObj.length; i++) {
        var venueName = venueObj[i].name;
        var x = i + 1;
        // console.log(venueName);
        // console.log('-----------------');
        // console.log(venueObj[i].lat);
        // console.log('-----------------');
        // console.log(venueObj[i].lon);
        addMarker(venueObj[i].lat, venueObj[i].lon, x + " ", venueName);
        if (i <= 10) {
          var listElement = document.createElement('li');
          listElement.innerHTML = '<ul>' + x + ' ' + venueName + '</ul>'; 
          resultsElement.appendChild(listElement);

        }
      }

    })
})



var map;
var autocomplete;
//initializes the map
function initMap() {
  var eastCoast = { lat: 40.0, lng: -72.0 };
  // console.log("initializing map");
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: eastCoast
  });

  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["geocode"],
      componentRestrictions: { 'country': ['gb'] },
      fields: ['place_id', 'geometry', 'formatted_address']
    }
  );
  //console.log(autocomplete);  
  autocomplete.addListener("place_changed", addCustomerLocation);

}

var addMarker = function (latIn, lngIn, labIn, name) { //Adds a new location with a given name, label, and location data
  // console.log("Adding marker at " + latIn + " " + lngIn + " " + labIn + " " + name);
  var marker = new google.maps.Marker({
    position: { lat: latIn, lng: lngIn },
    label: labIn,
    title: name,
    //map:map
  });

  marker.setMap(map);

}



//gets an inputed address
function addCustomerLocation() { //Gets the location from the user's saved file
  // Get the place details from the autocomplete object.
  // console.log("customer location added?");
  const userPlace = autocomplete.getPlace();


  // Add a marker to the map.
  // const marker = new google.maps.Marker({
  //         map
  //         });

  // marker.setLabel("YOUR ADDRESS");
  // marker.setPosition(userPlace.geometry.location);

  // // Zoom the map to the marker.
  // map.panTo(userPlace.geometry.location);
  // map.setZoom(15);

  lat = userPlace.geometry.location[0];
  lon = userPlace.geometry.location[1];
  console.log(userPlace.geometry.location[1];);
  // console.log(lat + " " + lon + " " + userPlace.geometry.location + " " + typeof (userPlace.geometry.location) + " " + userPlace.geometry.location.value);
  userInput(lat, lon, searchRadius);
  return [userPlace.geometry.location.latitude, userPlace.geometry.location.longitude];
}

var x = document.getElementById("xhtml");// name of something in the html
locButton.addEventListener("click", getLocation);

//gets html location
function getLocation() {

  // console.log("getting location");
  if (radInput.value) {

    searchRadius = radInput.value;
    console.log(searchRadius);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(returnPosition);

    //console.log("coords here "+ place);

    //return place;
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
    return addCustomerLocation();
  }
}
//helper function for above
function returnPosition(position) {
  //console.log("in return "+position.coords.latitude+" "+position.coords.longitude);
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  userInput(position.coords.latitude, position.coords.longitude, searchRadius);
  return [position.coords.latitude, position.coords.longitude];//seems not to return?
}


//initMap(); it does this automatically
//usIn = getLocation();
//console.log(usIn);



