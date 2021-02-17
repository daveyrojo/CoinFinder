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
navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
});