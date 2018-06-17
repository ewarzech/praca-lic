// necessary variables
var map;
var infoWindow = new google.maps.InfoWindow({
    map: map
});

// Try HTML5 geolocation.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Znaleziono lokalizację');
        map.setCenter(pos);
        //createMarker(pos);
        createLocalPos(pos);
        //przysłanianie metod
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Błąd: Nie udało się wykryć lokalizacji.' :
        'Błąd: Twoja przeglądarka nie wspiera geolokalizacji.');
}

// markersData variable stores the information necessary to each marker
var markersData = [{
        nazwa: "Rynek Główny",
        adres: "Rynek Główny",
        godziny: "07:00-22:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.062143,
        lng: 19.937548
    },
    {
        nazwa: "Plac Szczepański",
        adres: "Plac Szczepański",
        godziny: "07:00-22:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.064425,
        lng: 19.935129
    },
    {
        nazwa: "Pawia (Galeria Krakowska)",
        adres: "u. Pawia 5",
        godziny: "07:00-22:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.069549,
        lng: 19.946406
    },
    {
        nazwa: "ul. Powiśle",
        adres: "ul. Powiśle",
        godziny: "07:00-22:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.054843,
        lng: 19.933138
    },
    {
        nazwa: "Rondo Mogilskie",
        adres: "ul. Rondo Mogilskie",
        godziny: "00:00-00:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.065761,
        lng: 19.960058
    },
    {
        nazwa: "ul. Straszewskiego",
        adres: "ul. Straszewskiego",
        godziny: "07:00-22:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.0585796,
        lng: 19.9311352
    },
    {
        nazwa: "Błonia Krakowskie",
        adres: "Al. 3 Maja",
        godziny: "00:00-00:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.061186,
        lng: 19.911898
    },
    {
        nazwa: "Park Jordana od str. al. 3 Maja",
        adres: "Al. 3 Maja",
        godziny: "10:00-18:00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.061557,
        lng: 19.918936
    }

    // don't insert comma in the last item
];

//52.2006527,21.0023928,14.25
//center: new google.maps.LatLng(40.601203,-8.668173),
function initialize() {
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#d7d7d7"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#c5c5c5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                        "color": "#c1c1c1"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "color": "#a5a4a4"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#777777"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                        "color": "#8b8b8b"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#cecece"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], {
            name: 'Styled Map'
        })

    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 50.070857499999995,
            lng: 19.925147
        },
        zoom: 6
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    // Finally displayMarkers() function is called to begin the markers creation
    displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);



function displayMarkers() {

    // this variable sets the map bounds according to markers position
    var bounds = new google.maps.LatLngBounds();




    // for loop traverses markersData array calling createMarker function for each marker 
    for (var i = 0; i < markersData.length; i++) {

        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var nazwa = markersData[i].nazwa;
        var adres = markersData[i].adres;
        var godziny = markersData[i].godziny;
        var niepelnosprawni = markersData[i].niepelnosprawni;
        var platna = markersData[i].platna;

        createMarker(latlng, nazwa, adres, godziny, niepelnosprawni, platna);

        // marker position is added to bounds variable
        bounds.extend(latlng);
    }

    // Finally the bounds variable is used to set the map bounds
    // with fitBounds() function
    map.fitBounds(bounds);
}


function createLocalPos(latlng) {
    var marker = new google.maps.Marker({
        map: map,
        icon: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png',
        position: latlng,
        title: 'Twoja pozycja'
    });
    infoWindow.open(map, marker);
}
// This function creates each marker and it sets their Info Window content
function createMarker(latlng, nazwa, adres, godziny, niepelnosprawni, platna) {


    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: nazwa
    });

    // This event expects a click on a marker
    // When this event is fired the Info Window content is created
    // and the Info Window is opened.
    google.maps.event.addListener(marker, 'click', function() {

        // Creating the content to be inserted in the infowindow
        var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + nazwa + '</div>' +
            '<div class="iw_content">' + adres + '<br />' +
            '<strong>czynne: </strong>' + godziny + '<br />' +
            '<strong>dostęp dla niepełnosprawnych: </strong>' + niepelnosprawni + '<br />' +
            '<strong>płatna: </strong>' + platna + '<br />' +
            '</div></div>';

        // including content to the Info Window.
        infoWindow.setContent(iwContent);

        // opening the Info Window in the current map and at the current marker location.
        infoWindow.open(map, marker);
    });
}
