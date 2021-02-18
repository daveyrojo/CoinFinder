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
        console.log('Radius is not positive');
        return;
    }
    console.log(userLat + " " + userLon + " " + searchRadius);
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
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // console.log('-----------------');
            venueObj = data.venues;
            for (let i = 0; i < venueObj.length; i++) {
                var venueName = venueObj[i].name;
                console.log(venueName);
                console.log('-----------------');
                console.log(venueObj[i].lat);
                console.log('-----------------');
                console.log(venueObj[i].lon);
                addMarker(venueObj[i].lat, venueObj[i].lon, i + " ", venueName);
            }

        })
})



var map;
var autocomplete;
//initializes the map
function initMap() {
    var eastCoast = { lat: 40.0, lng: -72.0 };
    console.log("initializing map");
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
    console.log("Adding marker at " + latIn + " " + lngIn + " " + labIn + " " + name);
    var marker = new google.maps.Marker({
        position: { lat: latIn, lng: lngIn },
        label: labIn,
        title: name,
        //map:map
    });

    marker.setMap(map);

}