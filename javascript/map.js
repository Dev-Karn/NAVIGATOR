// // const panels = document.querySelectorAll('#panel');
// // let numberOfPanel = panels.length;

// // Set map options

// var mylatlong = {
//     lat: 20.5937,
//     lng: 78.9629
// };

// var mapOptions = {
//     center: mylatlong,
//     zoom: 5,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };

// // Create Map

// var map = new google.maps.Map(document.querySelector(".google-map"), mapOptions);

// // Create a Direction service object to ue the route method & get a result for our request.

// var directionsService = new google.maps.DirectionsService();

// // Create a DirectionsRenderer object which we will use to display the routes.

// var directionsDisplay = new google.maps.DirectionsRenderer();

// // Bind the directionsRenderer to the map.

// directionsDisplay.setMap(map);

// // function

// function calcRoute() {
//     // Create a request.
//     var request = {
//         origin: document.querySelector('.start-pos-box').value,
//         destination: document.querySelector('.end-pos-box').value,
//         travelMode: google.maps.TravelMode.DRIVING, // WALKING, BYCYCLE & TRANSIT
//         unitSystem: google.maps.UnitSystem.IMPERIAL
//     }

//     // Pass the request to the route method.

//     directionsService.route(request, (result, status) => {
//         if (status == google.maps.DirectionsStatus.OK) {
//             // Get distance and time.
//             const output = document.querySelector('#output');
//             output.innerHTML = "<div class='alert-info'> From: " + document.querySelector('.start-pos-box').value + ".<br> To: " + document.querySelector('.end-pos-box').value + "<br> Driving Distance: " + result.routes[0].legs[0].distance.text + ". <br> Duration: " + result.routes[0].legs[0].distance.text + ". </div>";
        

//             // Display route.
//             directionsDisplay.setDirections(result);
//         }
//         else {
//             // Delete route from map.
//             directionsDisplay.setDirections({ routes: [] });

//             // Center map in India.
//             map.setCenter(mylatlong);

//             // Show error message.
//             output.innerHTML = "<div class='alert-danger Could not retrieve the driving direction.</div>"
//         }
//     });
// }

// // Create Auto Complete objects for all inputs.

// var options = {
//     types: ['(cities)']
// }

// var input1 = document.querySelector('.start-pos-box');
// var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

// var input2 = document.querySelector('.end-pos-box');
// var autocomplete2 = new google.maps.places.Autocomplete(input2, options);


mapboxgl.accessToken = 'pk.eyJ1IjoicHJpbmNla2FybiIsImEiOiJjbDNkenFtM3YwZGdqM2ZwcmczejN6NnZxIn0.wKNq035b02fua69rMyEucA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([78.9629, 20.5937])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

