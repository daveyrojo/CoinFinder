// if ('geolocation' in navigator) {
//     console.log('geolocation is available');
// } else {
//     console.log('geolocation IS NOT available');

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(showPosition);
//     } /*else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }*/
// }
// function showPosition(position) {
//   console.log(position.coords.latitude); 
//   console.log('--------------')
//   console.log(position.coords.longitude);
// }
// navigator.geolocation.getCurrentPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
// });
// var minLat = 40;
// var maxLat = 42;
// var minLon = -75;
// var maxLon = -74;
// 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/coins/'
// '?lat1=40&lat2=42&lon1=-75&maxLon=-74&limit=1'
// 'https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=40&lat2=42&lon1=-75&maxLon=-74&limit=5'

// fetch('https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?lat1=40&lat2=42&lon1=-75&maxLon=-74&limit=5')
//     .then(function (response) {
//         // console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);

//         venueObj = data.venues;
//         for (let i = 0; i < venueObj.length; i++) {
//             var venueName = venueObj[i].name;
//             console.log(venueObj[i]);
//             // console.log('-----------------');
//             // console.log(venueObj[i].lat);
//             // console.log('-----------------');
//             // console.log(venueObj[i].lon);
//         }
//     });


    fetch('https://cors-anywhere.herokuapp.com/https://coinmap.org/api/v1/venues/?query=adrite')
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
        });



