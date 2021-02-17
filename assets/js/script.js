//latitude = 69 miles
//longitude = 54.6 miles
var searchButton = document.querySelector('#searchButton');
var locButton = document.querySelector('#addLocation');
var minLat = 40;
var maxLat = 42;
var minLon = -75;
var maxLon = -74;
var searchRadius = 1;

var userInput = function(userLat, userLon, searchRadius) {
    if (searchRadius <= 0) {
        console.log('Radius is not positive');
        return;
    }
    minLat = userLat - searchRadius/69.0;
    maxLat = userLat + searchRadius/69.0;
    minLon = userLon - searchRadius/54.6;
    maxLon = userLon + searchRadius/54.6;
        
}

searchButton.addEventListener('click', function() {
    var searchQuery = 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=' + minLat.toFixed(4) + '&lon1=' + minLon.toFixed(4) + '&lat2=' + maxLat.toFixed(4) + '&lon2=' + maxLon.toFixed(4);
    console.log(minLat, maxLat, minLon, maxLon);
    console.log(searchQuery);
    fetch(searchQuery)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // console.log('-----------------');
            venueObj = data.venues;
            //for (let i = 0; i < venueObj.length; i++) {
            //    var venueName = venueObj[i].name;
            //    console.log(venueName);
            //    console.log('-----------------');
            //    console.log(venueObj[i].lat);
            //    console.log('-----------------');
            //    console.log(venueObj[i].lon);
            //}

        })
})



var map;
var autocomplete;
function initMap() {
    console.log("initializing map");
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 40, lng: -72 }, zoom: 1,
      zoomControl: false
    });
    console.log(map)
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        { types: ["geocode"],
          componentRestrictions: {'country': ['gb']},
          fields: ['place_id', 'geometry', 'formatted_address'] }
      );
    console.log(autocomplete);  
    autocomplete.addListener("place_changed", addCustomerLocation);

  }


  

function addCustomerLocation() { //Gets the location from the user's saved file
  // Get the place details from the autocomplete object.
  console.log("customer location added?");
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

var x = document.getElementById("xhtml");// name of something in the html
locButton.addEventListener("click", getLocation);


function getLocation() {
    console.log("getting location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(returnPosition);
    
    //console.log("coords here "+ place);
    
    //return place;
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    return addCustomerLocation();
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    return position;
  }
function returnPosition(position){
    console.log("in return "+position.coords.latitude+" "+position.coords.longitude);
    userInput(position.coords.latitude, position.coords.longitude, searchRadius);
    return [position.coords.latitude, position.coords.longitude];
}


//initMap(); it does this automatically
//usIn = getLocation();
//console.log(usIn);

