var map;
var mapOptions = { center: new google.maps.LatLng(0.0, 0.0), zoom: 2,
  mapTypeId: google.maps.MapTypeId.ROADMAP };
var markers = [];

function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  from1 = new google.maps.LatLng(0,0);
  to1 = new google.maps.LatLng(30,12);

  from2 = new google.maps.LatLng(-30,15);
  to2 = new google.maps.LatLng(10,-100);

  from3 = new google.maps.LatLng(0,-50);
  to3 = new google.maps.LatLng(0,50);

  addMarker(from1,to1);
  addMarker(from2,to2);
  addMarker(from3,to3);
}

function addMarker(pos, dest) {
  var marker = new google.maps.Marker({
    map: map,
    position: pos,
    destination: dest
  });

  google.maps.event.addListener(marker, 'click', function(event) {
    fromLat = this.position.lat();
    fromLng = this.position.lng();
    toLat = this.destination.lat();
    toLng = this.destination.lng();

    // store a LatLng for each step of the animation
    frames = [];
    for (var percent = 0; percent < 1; percent += 0.01) {
      curLat = fromLat + percent * (toLat - fromLat);
      curLng = fromLng + percent * (toLng - fromLng);
      frames.push(new google.maps.LatLng(curLat, curLng));
    }

    move = function(marker, latlngs, index, wait, newDestination) {
      marker.setPosition(latlngs[index]);
      if(index != latlngs.length-1) {
        // call the next "frame" of the animation
        setTimeout(function() { 
          move(marker, latlngs, index+1, wait, newDestination); 
        }, wait);
      }
      else {
        // assign new route
        marker.position = marker.destination;
        marker.destination = newDestination;
      }
    }

    // begin animation, send back to origin after completion
    move(marker, frames, 0, 20, marker.position);
  });

  markers.push(marker);
}
google.maps.event.addDomListener(window, 'load', initialize);