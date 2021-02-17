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
            }
        })
})

userInput(40, -72, 100);





