






 var map2;
// Initialize and add the map51.961104338425066, 15.544904171130122
function contactMap() {
    const officeLocation = { lat: 51.961104338425066, lng: 15.544904171130122 };
    const map2 = new google.maps.Map(document.getElementById("contact-map"), {
      zoom: 12,
      center: officeLocation,
    });
    map2.setMapTypeId(google.maps.MapTypeId.HYBRID)
    const marker = new google.maps.Marker({
      position: officeLocation,
      map: map2,
    });
  }
  
window.initMap = map2;