        //Defining map as a global variable to access from other functions
        var map;
        var polyline;
 
        var lineCoordinates = [
           [44.0715858,27.2454436],[43.83531,25.9752809],
		   [43.0840727,25.6331224],[42.6954322,23.3239467],
		   [52.3747157,4.8986167],[51.2384547,6.8143503]
        ];
 
        function addAnimatedPolyline () {
            //First we iterate over the coordinates array to create a
            // new array which includes objects of LatLng class.
            var pointCount = lineCoordinates.length;
            var linePath = [];
            for (var i=0; i < pointCount; i++) {
                var tempLatLng = new google.maps.LatLng(lineCoordinates[i][0], lineCoordinates[i][1]);
                linePath.push(tempLatLng);
            }
 
            // Defining arrow symbol
            var arrowSymbol = {
                rotation: 270,
                strokeWeight: 4,
                strokeColor: '#080082',
                scale: 0.1,
                path: 'M21.474,377.522V117.138c0-14.469,11.729-26.199,26.199-26.199h260.25c14.469,0,26.198,11.73,26.198,26.199v260.385   c0,4.823-3.909,8.733-8.733,8.733H30.207C25.383,386.256,21.474,382.346,21.474,377.522z M231.634,466.724   c0,30.01-24.329,54.338-54.338,54.338c-30.009,0-54.338-24.328-54.338-54.338c0-30.011,24.329-54.338,54.338-54.338   C207.305,412.386,231.634,436.713,231.634,466.724z M204.464,466.724c0-15.005-12.164-27.169-27.169-27.169   s-27.17,12.164-27.17,27.169s12.165,27.17,27.17,27.17S204.464,481.729,204.464,466.724z M130.495,412.385H8.733   c-4.823,0-8.733,3.91-8.733,8.733v26.495c0,4.823,3.91,8.733,8.733,8.733h97.598C108.879,438.862,117.704,423.418,130.495,412.385z    M515.938,466.724c0,30.01-24.329,54.338-54.338,54.338c-30.01,0-54.338-24.328-54.338-54.338   c0-30.011,24.328-54.338,54.338-54.338C491.609,412.385,515.938,436.713,515.938,466.724z M488.77,466.724   c0-15.005-12.165-27.169-27.17-27.169c-15.006,0-27.169,12.164-27.169,27.169s12.164,27.17,27.169,27.17   S488.77,481.729,488.77,466.724z M612,421.118v26.495c0,4.823-3.91,8.733-8.733,8.733h-70.704   c-5.057-34.683-34.906-61.427-70.961-61.427c-36.062,0-65.912,26.745-70.969,61.427H248.261   c-2.549-17.483-11.373-32.928-24.164-43.961h134.994V162.594c0-9.646,7.82-17.466,17.466-17.466h82.445   c23.214,0,44.911,11.531,57.9,30.77l53.15,78.721c7.796,11.547,11.962,25.161,11.962,39.094v118.672h21.253   C608.09,412.385,612,416.295,612,421.118z M523.408,256.635l-42.501-60.393c-1.636-2.324-4.3-3.707-7.142-3.707H407.47   c-4.822,0-8.733,3.91-8.733,8.733v60.393c0,4.824,3.91,8.733,8.733,8.733h108.798C523.342,270.394,527.48,262.421,523.408,256.635z'
            };
 
            // Polyline properties are defined below
            var lineOptions = {
                path: linePath,
                icons: [{
                    icon: arrowSymbol
                    //offset: '100%'
                }],
                strokeWeight: 3,
                strokeColor: '#FF0000',
                strokeOpacity: 1
            }
            polyline = new google.maps.Polyline(lineOptions);
 
            // Polyline is set to current map
            polyline.setMap(map);
 
            // Calling the arrow animation function
            animateArrow();
        }
 
        function animateArrow() {
            var counter = 0;
            var accessVar = window.setInterval(function() {
                counter = (counter + 1) % 350;
 
                var arrows = polyline.get('icons');
                arrows[0].offset = (counter / 2) + '%';
                polyline.set('icons', arrows);
            }, 50);
        }
 
        function initMap() {
            //Enabling new cartography and themes
            google.maps.visualRefresh = true;
 
            //Setting starting options of map
            var mapOptions = {
                center: new google.maps.LatLng(47.5550609,18.5756966),
                zoom: 6,
                // mapTypeId: google.maps.MapTypeId.ROADMAP
            };
 
            //Getting map DOM element
            var mapElement = document.getElementById('map');
 
            //Creating a map with DOM element which is just obtained
            map = new google.maps.Map(mapElement, mapOptions);
 
            addAnimatedPolyline();
        }
 
        google.maps.event.addDomListener(window, 'load', initMap);







// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const polandLocation = { lat: 52.237049, lng: 21.017532 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 5,
//       center: polandLocation,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: polandLocation,
//       map: map,
//     });
//   }
  
  //window.initMap = initMap;