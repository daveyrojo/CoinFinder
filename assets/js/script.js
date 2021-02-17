//get google maps sub function in main function
//produce on page
//make dynamic variables//have search query work with variables

//Below  queries a search of coins that can be referred to in the venue's id #
//'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/coins/'


//latitude = 69 miles
//longitude = 54.6 miles
var searchButton = document.querySelector('#searchButton');

var minLat = 40;
var maxLat = 42;
var minLon = -75;
var maxLon = -74;
// var searchRadius = 1;

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
    var searchQuery = 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=' + minLat+ '&lon1=' + minLon+ '&lat2=' + maxLat + '&lon2=' + maxLon;
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
            }
        })
})

getLatLon();

function getLatLon() {
    //need to make location a variable that responds to an input field
    var location = '210 Cambridge Ave Jersey City, NJ';
    //need to write this fetch so it accepts above variable
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
        params: {
            address: location,
            key: 'AIzaSyDwit_ck5hR1Olc9m0xDLOuZmRaJTZN8F4'
        }
    }) // can probably clean up code below this point
        .then(function (response) {
            // console.log(response);
            let googleData = response.data;
            // console.log(googleData);
            let locationData = googleData.results;
            // console.log(locationData);
            let addressCode = locationData[0];
            // console.log(addressCode);
            let geoCode = addressCode.geometry;
            // console.log(geoCode);
            let coords = geoCode.location;
            // console.log(coords);
            let userLat = coords.lat;
            let userLon = coords.lng;
            console.log(userLat, userLon);
        })
}
userInput(40.7496958, -74.0459631, 1);





