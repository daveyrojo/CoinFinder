getLatLon();

function getLatLon() {
    var location= '210 Cambridge Ave Jersey City, NJ';
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

        console.log(userLat, userLon);

    })
}

// Dave's key:AIzaSyDwit_ck5hR1Olc9m0xDLOuZmRaJTZN8F4


