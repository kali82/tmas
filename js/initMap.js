//         //Defining map as a global variable to access from other functions
//         var map;
//         var polyline;
//         let germanyPolyline;
//         let cechPolyline;
//         let slovakPolyline;


//         var lineCoordinates = [
//            [44.0715858,27.2454436],[43.83531,25.9752809],
// 		   [43.0840727,25.6331224],[42.6954322,23.3239467],
// 		   [52.3747157,4.8986167],[51.2384547,6.8143503]
//         ];
//         let germanyCoordinates = [
//             [52.44298956333314, 18.720196949533225], [51.477107, 9.851322],
//             [51.477107, 9.851322], [52.44298956333314, 18.720196949533225] 
//         ];
//         let cechCoordinates = [
//             [52.44298956333314, 18.720196949533225], [49.81764566235488, 15.205056094046585]
//         ];
//         let slovakCoordinates = [
//             [52.44298956333314, 18.720196949533225], [49.09633422549106, 18.651814125006133]
//         ];
 
//         function addAnimatedPolyline () {
//             // Defining truck  symbol
//             var arrowSymbol = {
//                 rotation: 90,
//                 strokeWeight: 0.5,
//                 strokeColor: 'rgb(25, 0, 255)',
//                 scale: (-0.01,0.1),
//                 path: 'M495.99,121.797H171.298c-8.842,0-16.01,7.168-16.01,16.01v157.57h-10.332V140.375c0-8.842-7.168-16.01-16.01-16.01H95.579c-29.375,0-53.748,21.813-57.778,50.091C15.716,182.941,0,204.375,0,229.414v117.53c0,8.842,7.168,16.01,16.01,16.01H40.93c9.019,16.234,26.34,27.249,46.192,27.249c20.144,0,37.685-11.341,46.588-27.97c6.516-2.028,11.248-8.107,11.248-15.29v-19.546h10.332v19.546c0,8.842,7.168,16.01,16.01,16.01h44.496c9.019,16.234,26.34,27.249,46.192,27.249s37.173-11.015,46.192-27.249h65.686c9.019,16.234,26.34,27.249,46.192,27.249s37.172-11.015,46.192-27.249h29.744c8.842,0,16.01-7.168,16.01-16.01V137.808C512,128.966,504.833,121.797,495.99,121.797z M87.121,358.182c-11.464,0-20.79-9.326-20.79-20.79s9.327-20.79,20.79-20.79s20.791,9.327,20.791,20.79S98.586,358.182,87.121,358.182z M112.936,291.348c-7.639-4.299-16.443-6.765-25.815-6.765c-26.931,0-49.203,20.269-52.4,46.351h-2.7V260.42c1.515,0.475,3.125,0.733,4.797,0.733h24.711c8.842,0,16.01-7.168,16.01-16.01s-7.168-16.01-16.01-16.01H36.817c-1.671,0-3.282,0.258-4.797,0.733v-0.453c0-14.792,12.034-26.828,26.828-26.828h54.088V291.348z M112.936,170.566H72.217c4.4-8.42,13.221-14.181,23.362-14.181h17.357V170.566z M187.308,153.818h292.671v16.748H187.308V153.818z M261.985,358.183c-11.464,0-20.79-9.327-20.79-20.79s9.325-20.79,20.79-20.79s20.791,9.325,20.791,20.79C282.776,348.857,273.45,358.183,261.985,358.183z M420.054,358.183c-11.464,0-20.791-9.327-20.791-20.79s9.326-20.79,20.791-20.79s20.79,9.325,20.79,20.79C440.844,348.857,431.519,358.183,420.054,358.183z M479.98,330.934h-7.524v-0.001c-3.198-26.082-25.469-46.351-52.4-46.351c-26.931,0-49.204,20.269-52.402,46.351h-53.267c-3.198-26.082-25.47-46.351-52.401-46.351s-49.203,20.269-52.4,46.351h-22.277V202.586H479.98V330.934z'
//             };

//             //First we iterate over the coordinates array to create a
//             // new array which includes objects of LatLng class.
//             var pointCount = lineCoordinates.length;
//             var linePath = [];
//             for (var i=0; i < pointCount; i++) {
//                 var tempLatLng = new google.maps.LatLng(lineCoordinates[i][0], lineCoordinates[i][1]);
//                 linePath.push(tempLatLng);
//             }

//             ///GERMANY
//             var germanyCount = germanyCoordinates.length;
//             var germanyPath = [];
//             for (var i=0; i < germanyCount; i++) {
//                 var tempLatLng = new google.maps.LatLng(germanyCoordinates[i][0], germanyCoordinates[i][1]);
//                 germanyPath.push(tempLatLng);
//             }

//             var germanyLineOptions = {
//                 path: germanyPath,
//                 icons: [{
//                     icon: arrowSymbol
//                     //offset: '100%'
//                 }],
//                 strokeWeight: 2,
//                 strokeColor: '#2D9745',
//                 strokeOpacity: 1
//             }
//                         ///CECHIA
//                         var cechCount = cechCoordinates.length;
//                         var cechPath = [];
//                         for (var i=0; i < cechCount; i++) {
//                             var tempLatLng = new google.maps.LatLng(cechCoordinates[i][0], cechCoordinates[i][1]);
//                             cechPath.push(tempLatLng);
//                         }
            
//                         var cechLineOptions = {
//                             path: cechPath,
//                             icons: [{
//                                 icon: arrowSymbol
//                                 //offset: '100%'
//                             }],
//                             strokeWeight: 2,
//                             strokeColor: '#2D9745',
//                             strokeOpacity: 1
//                         }
//             ///SLOVAKIA
//             var slovakCount = slovakCoordinates.length;
//             var slovakPath = [];
//             for (var i=0; i < slovakCount; i++) {
//                 var tempLatLng = new google.maps.LatLng(slovakCoordinates[i][0], slovakCoordinates[i][1]);
//                 slovakPath.push(tempLatLng);
//             }

//             var slovakLineOptions = {
//                 path: slovakPath,
//                 icons: [{
//                     icon: arrowSymbol
//                     //offset: '100%'
//                 }],
//                 strokeWeight: 2,
//                 strokeColor: '#2D9745',
//                 strokeOpacity: 1
//             } 
 
//             // Polyline properties are defined below
//             var lineOptions = {
//                 path: linePath,
//                 icons: [{
//                     icon: arrowSymbol
//                     //offset: '100%'
//                 }],
//                 strokeWeight: 2,
//                 strokeColor: '#2D9745',
//                 strokeOpacity: 1
//             }
//             //polyline = new google.maps.Polyline(lineOptions);
//             germanyPolyline = new google.maps.Polyline(germanyLineOptions);
//             cechPolyline = new google.maps.Polyline(cechLineOptions);
//             slovakPolyline = new google.maps.Polyline(slovakLineOptions);

//             // Polyline is set to current map
//             //polyline.setMap(map);
//             germanyPolyline.setMap(map)
//             cechPolyline.setMap(map)
//             slovakPolyline.setMap(map)

 
//             // Calling the arrow animation function
//            // animateArrow(polyline);
//             animateArrow(germanyPolyline);
//             animateArrow(cechPolyline);
//             animateArrow(slovakPolyline);

//         }
 
//         function animateArrow(polyline) {
//             var counter = 0;
//             var accessVar = window.setInterval(function() {
//                 counter = (counter + 1) % 350;
 
//                 var arrows = polyline.get('icons');
//                 arrows[0].offset = (counter / 2) + '%';
//                 polyline.set('icons', arrows);
//             },20);
//         }
 
//         function initMap() {
//             //Enabling new cartography and themes
//             google.maps.visualRefresh = true;
 
//             //Setting starting options of map
//             var mapOptions = {
//                 center: new google.maps.LatLng(47.5550609,18.5756966),
//                 zoom: 5,
//                 // mapTypeId: google.maps.MapTypeId.ROADMAP
//             };
 
//             //Getting map DOM element
//             var mapElement = document.getElementById('map');
 
//             //Creating a map with DOM element which is just obtained
//             map = new google.maps.Map(mapElement, mapOptions);
 
//             addAnimatedPolyline();
//         }
 
//         google.maps.event.addDomListener(window, 'load', initMap);







// // // Initialize and add the map
// // function initMap() {
// //     // The location of Uluru
// //     const polandLocation = { lat: 52.237049, lng: 21.017532 };
// //     // The map, centered at Uluru
// //     const map = new google.maps.Map(document.getElementById("map"), {
// //       zoom: 5,
// //       center: polandLocation,
// //     });
// //     // The marker, positioned at Uluru
// //     const marker = new google.maps.Marker({
// //       position: polandLocation,
// //       map: map,
// //     });
// //   }
  
//   //window.initMap = initMap;