// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;

// markersData variable stores the information necessary to each marker
var markersData = [
 {
    nazwa: "SKYMAR - sprzedaż artykułów ortopedycznych, medycznych, rehabilitacyjnych i przemysłowych",
    gdzie: "w lokalu",
    adres: "Al. Jerozolimskie 113/115",
    godziny: "09:00-18:00",
    niepelnosprawni: "tak",
    platna: "nie",
    przewijak: "nie",
    lat: 50.2255047,
    lng: 20.9915849
  },
 {
    nazwa: "Restauracja IO RAVIOLO",
    gdzie: "w lokalu gastronomicznym",
    adres: "Al. Jerozolimskie 117",
    godziny: "11:00-22:00",
    niepelnosprawni: "tak",
    platna: "nie",
    przewijak: "nie",
    lat: 50.2253876,
    lng: 20.9907322
  }
// don't insert comma in the last item
];

//52.2006527,21.0023928,14.25
//center: new google.maps.LatLng(40.601203,-8.668173),
function initialize() {
   map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 50.070857499999995, lng: 19.925147},
    zoom: 6
  });
   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();
    
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);



function displayMarkers(){

   // this variable sets the map bounds according to markers position
 var bounds = new google.maps.LatLngBounds();
    
    	

   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var nazwa = markersData[i].nazwa;
      var adres = markersData[i].adres;
      var godziny = markersData[i].godziny;
      var gdzie = markersData[i].gdzie;
	  var niepelnosprawni = markersData[i].niepelnosprawni;
	  var platna = markersData[i].platna;
	  var przewijak = markersData[i].przewijak;
	  

      createMarker(latlng, nazwa, adres, godziny, gdzie, niepelnosprawni, platna, przewijak);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
  map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, nazwa, adres, godziny, gdzie, niepelnosprawni, platna, przewijak){
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
         '<strong>gdzie: </strong>' + gdzie + '<br />' +
		 '<strong>dostęp dla niepełnosprawnych: </strong>' + niepelnosprawni + '<br />' +
		 '<strong>płatna: </strong>' + platna + '<br />' +
		 '<strong>przewijak: </strong>' + przewijak + '<br />' +
		 '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}
