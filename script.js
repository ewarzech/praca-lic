function initMap() {
  var myLatLng = {lat: 50.070857499999995, lng: 19.925147};
  var myLatLng2 = {lat: 50.062143, lng: 50.062143};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Tu jestem!'
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.064708, 19.916431),
    map: map,
    title: 'Park Jordana od ul. Reymonta'
  });
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '<div id="bodyContent">'+
      '<p>nazwa: Park Jordana</p>'+
      '<p>lokalizacja: Al. 3 Maja</p>'+
      '<p>godziny otwarcia: 10:00 - 18:00</p>'+
      '</div>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.064708, 19.916431),
    map: map,
    title: 'Park Jordana od ul. Reymonta'
  });
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.062143, 19.937548),
    map: map,
    title: 'Rynek Główny'
  });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '<div id="bodyContent">'+
      '<p>nazwa: Rynek Główny</p>'+
      '<p>lokalizacja: Rynek Główny 1</p>'+
      '<p>godziny otwarcia: 7:00 - 22:30</p>'+
      '</div>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.062143, 19.937548),
    map: map,
    title: 'Rynek Główny'
  });
  
  
  
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
}
