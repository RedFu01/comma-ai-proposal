var app = angular.module('comma-app',[])

app.controller('mainCtrl',function($http,$q){

var map, marker;

function updateMap(){
	$http({
  method: 'GET',
  url: 'http://comma.ai/data/location.json'
}).then(function successCallback(response) {
	console.log(response)
	map.setCenter({lat: response.gps[0], lng: response.gps[1]});
	marker.setPosition({lat: response.gps[0], lng: response.gps[1]});
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
	  console.log(response)
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}

function initMap(){
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7833, lng: -122.4167},
    zoom: 11,
	disableDefaultUI: true,
	scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
	styles: [
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]
})
marker = new google.maps.Marker({
	position:{lat: 37.7833, lng: -122.4167},
	map:map


})
}

setTimeout(initMap, 300);
setInterval(updateMap,1000)

})