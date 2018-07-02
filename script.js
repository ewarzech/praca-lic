//zdefiniowanie zmiennych
var map;
var infoWindow = new google.maps.InfoWindow({
    map: map
});

// Wykorzystanie geolokalizacji HTML5 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var myPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var positionRadius = {
            myPos: {
            center: {lat: myPosition.lat, lng: myPosition.lng},
            metres: 100 //Tutaj Podajesz promien w metrach 
          }
        };


        for (var pos in positionRadius) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
              strokeColor: '#26B542',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#57FB7A',
              fillOpacity: 0.35,
              map: map,
              center: positionRadius[pos].center,
              radius: Math.sqrt(positionRadius[pos].metres) * 25
            });
          }


        infoWindow.setPosition(myPosition);
        infoWindow.setContent('Znaleziono lokalizację');
        map.setCenter(myPosition);
        createLocalPos(myPosition);
        //przysłanianie metod
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // przeglądarka nie wspiera geolokalizacji
    handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, myPosition) {
    infoWindow.setPosition(myPosition);
    infoWindow.setContent(browserHasGeolocation ?
        'Błąd: Nie udało się wykryć lokalizacji.' :
        'Błąd: Twoja przeglądarka nie wspiera geolokalizacji.');
}

// zmienne markersData zawierają informacje niezbędne dla każedego markera
var markersData = [{
        nazwa: "Rynek Główny",
        adres: "Rynek Główny 41",
        godziny: "07:00-22:30",
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
        adres: "ul. Pawia 5",
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
        adres: "Rondo Mogilskie",
        godziny: "24h",
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
        godziny: "24h",
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
    },
    {
        nazwa: "Rondo Kocmyrzowskie",
        adres: "Rondo Kocmyrzowskie",
        godziny: "24h",
        niepelnosprawni: "tak",
        platna: "tak",
        lat: 50.079768,
        lng: 20.026614
    },
    {
        nazwa: "Borek Fałęcki pętla",
        adres: "ul. Orzechowa 1",
        godziny: "24h",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.011686,
        lng: 19.926602
    },
    {
        nazwa: "Daszyńskiego/Metalowców",
        adres: "Al. Ignacego Daszyńskiego 3",
        godziny: "24h",
        niepelnosprawni: "tak",
        platna: "tak",
        lat: 50.058275,
        lng: 19.950311
    },
    {
        nazwa: "Smocza / Bernardyńska (bulwary)",
        adres: "ul.Smocza/Bernardyńska",
        godziny: "IV-X: 7.00-20.00, XI-III: 8.00-18.00",
        niepelnosprawni: "tak",
        platna: "nie",
        lat: 50.052421,
        lng: 19.935143
    },
    {
        nazwa: "Prądnicka/Nowy Kleparz, pętla autobusowa",
        adres: "ul. Prądnicka 1",
        godziny: "6:00-18:00",
        niepelnosprawni: "tak",
        platna: "tak",
        lat: 50.074855,
        lng: 19.936419
    },
    {
        nazwa: "Rakowicka pętla tramwajowa",
        adres: "ul. Rakowicka 45",
        godziny: "8:00-16:00",
        niepelnosprawni: "tak",
        platna: "tak",
        lat: 50.073919,
        lng: 19.95798
    },
    {
        nazwa: "Rakowicka pętla tramwajowa",
        adres: "ul. Rakowicka 45",
        godziny: "8:00-16:00",
        niepelnosprawni: "tak",
        platna: "tak",
        lat: 50.073919,
        lng: 19.95798
    },

];


function initMap() {
    var styledMapType = new google.maps.StyledMapType(
        [{
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.54
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "stylers": [{
                    "color": "#4d4946"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "gamma": 0.48
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "gamma": 7.18
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
    //tworzone jest nowe okno InfoWindow
    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    // na koncu funkcja displayMarkers() jest wywoływana do utuchomienia działania markerów
    displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initMap);

function displayMarkers() {

    // ta zmienna ustawia mapę względem markerów na mapie
    var bounds = new google.maps.LatLngBounds();

    // pętla tworzy tablicę markersData wywolującą funkcję createMarker dla każdego markera
    for (var i = 0; i < markersData.length; i++) {

        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var nazwa = markersData[i].nazwa;
        var adres = markersData[i].adres;
        var godziny = markersData[i].godziny;
        var niepelnosprawni = markersData[i].niepelnosprawni;
        var platna = markersData[i].platna;

        createMarker(latlng, nazwa, adres, godziny, niepelnosprawni, platna);

        // pozycja markera jest dodawana do zmiennych bounds
        bounds.extend(latlng);
    }

    // Tutaj zmienne bounds zostają wykorzystane do ustawienia widoku mapy za pomocą funkcji fitBounds()
    map.fitBounds(bounds);
}

function createLocalPos(latlng) {
    var marker = new google.maps.Marker({
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png',
        position: latlng,
        title: 'Twoja pozycja'
    });
    infoWindow.open(map, marker);
}
// poniższa funkcja tworzy markery i umieszcza każdy do okienka infoWindow
function createMarker(latlng, nazwa, adres, godziny, niepelnosprawni, platna) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: nazwa
    });

    // poniższy event oczekuje kliknięcia w marker, gdy jest utworzone i otwarte infoWindow
    google.maps.event.addListener(marker, 'click', function() {

        // tworzenie zawartości infoWindow
        var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + nazwa + '</div>' +
            '<div class="iw_content"><strong>adres: </strong>' + adres + '<br />' +
            '<strong>czynne: </strong>' + godziny + '<br />' +
            '<strong>dostęp dla niepełnosprawnych: </strong>' + niepelnosprawni + '<br />' +
            '<strong>płatna: </strong>' + platna + '<br />' +
            '</div></div>';

        // dołączanie zawartości do infoWindow.
        infoWindow.setContent(iwContent);

        // otwieranie infoWindow w obecnej mapie wraz z istniejącymi markerami
        infoWindow.open(map, marker);
    });
}
