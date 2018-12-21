 function initMap() {
     var map = new google.maps.Map(document.getElementById("map"), { //google map function
         zoom: 3,
         center: {
             lat: 46.619261,
             lng: -33.134766
         }
     });
     var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
     var locations = [
         { lat: 40.785091, lng: -73.968285 },
         { lat: 41.084045, lng: -73.874245 },
         { lat: 40.754932, lng: -73.984016 }
     ];
 
     var markers = locations.map(function(location, i) { //javaScript map method, similar to forEach(), but returns an array with the result of looping through items in our location array
         //takes up to three arguments
         //location is the current value of where we are in the array as we are loopin through
         //i is index number of our current location in the array
         return new google.maps.Marker({
             position: location, //current location
             label: labels[i % labels.length] //modulo is used because if the locations are more numerous than "A to Z"(the value of var labels), it will loop around our string and go from Z back to A instead of throwing an error
         });
     });
 
     var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
 }