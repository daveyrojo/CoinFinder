var searchButton = document.querySelector('#searchButton');
var searchAddress = document.querySelector('#searchAddress');
var userAddress = '210 Cambridge Ave Jersey City, NJ';
var minLat;
var maxLat;
var minLon;
var maxLon;


var userInput = function (userLat, userLon, searchRadius) {
    if (searchRadius <= 0) {
        console.log('Radius is not positive');
        return;
    }
    minLat = userLat - searchRadius / 69.0;
    maxLat = userLat + searchRadius / 69.0;
    minLon = userLon - searchRadius / 54.6;
    maxLon = userLon + searchRadius / 54.6;

}

searchAddress.addEventListener('click', function getLatLon(userAddress) {
        //need to change to a variable
    var location = '210 Cambridge Ave Jersey City, NJ';
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {params:{
        address: location,
        key: 'AIzaSyDwit_ck5hR1Olc9m0xDLOuZmRaJTZN8F4'
    }
    })
    .then(function(response){
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

        console.log(userLat, userLon);

    })
});


var searchQuery = 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=' + minLat + '&lon1=' + minLon + '&lat2=' + maxLat + '&lon2=' + maxLon;
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
// Dave's key:AIzaSyDwit_ck5hR1Olc9m0xDLOuZmRaJTZN8F4


