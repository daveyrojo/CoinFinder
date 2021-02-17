//get search query on button click
//get google maps sub function in main function
//produce on page
//make dynamic variables//have search query work with variables

// const fetch = require('node-fetch');
// var corsWorkAround = 'https://cors-anywhere.herokuapp.com/';
// searchButton.addEventListeneter('click', function() {
    
// })

//var userLat = <ui>
//var maxLat = userLat + 1
var searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', function() {
    fetch('https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=40&lon1=-75&lat2=42&lon2=-74',)
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




//var userLong = lon1+= <insertuserlongitude>
//var userLat = lat1+= <insertuserlatitude>
//lon1 and lat1 = minimum parameters
//maximum parameters need to be a franch of the lat and long
//1 lat = 69 miles
//1 lon = 54.6 miles
//maxLong = userLong + < 1
//maxLat = userLat + < 1

//need to pull data from coin map
//lat/long is then plugged into googlemap (init map) to show in their area
//we need to save recent searches to localstorage
//could we then use google maps to send data back to coin map and modify the venue info?
//user puts in zipcode in search,googlemaps pulls area, we then query a search using minimum lat/long and maximum lat/long to search an area
//google maps allows us to grab users location
//need to have a selection of coins
//need to pull an article that gives us up to date info
    //
