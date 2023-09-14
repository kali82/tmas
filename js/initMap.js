



 var map2;
function contactMap() {
    const officeLocation = { lat: 51.96170736757314, lng: 15.535628188855894 };
    const map2 = new google.maps.Map(document.getElementById("contact-map"), {
      zoom: 16,
      center: officeLocation,
    });
    map2.setMapTypeId(google.maps.MapTypeId.HYBRID)
    const marker = new google.maps.Marker({
      position: officeLocation,
      map: map2,
    });
  }
  
window.initMap = map2;