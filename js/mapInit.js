// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1Ijoia2FsaXN6ZXdza2ltYWNpZWoiLCJhIjoiY2xhM3pwaTg0MHRybTNvbzNuOHNyaGIxbSJ9.7nRYsGaNM6fm20SwouHyQw';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
style: 'mapbox://styles/mapbox/dark-v10',
center: [10, 48.8],
zoom: 4,
pitch: 10,
projection: 'globe',
locale: 'pl-pl'

});
 
map.on('style.load', () => {
// map.setFog({ 'horizon-blend': 0.05 }); // Enable stars with reduced atmosphere
});
 
// San Francisco
const origin = [21.017532, 52.237049];
 
// Washington DC
const destination = [9.297722095222504, 50.716043395221334];
 
// A simple line from origin to destination.
const route = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'LineString',
'coordinates': [origin, destination]
}
}
]
};
 
// A single point that animates along the route.
// Coordinates are initially set to origin.
const point = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {},
'geometry': {
'type': 'Point',
'coordinates': origin
}
}
]
};
 
// Calculate the distance in kilometers between route start/end point.
const lineDistance = turf.length(route.features[0]);
 
const arc = [];
 
// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
const steps = 100;
 
// Draw an arc between the `origin` & `destination` of the two points
for (let i = 0; i < lineDistance; i += lineDistance / steps) {
const segment = turf.along(route.features[0], i);
arc.push(segment.geometry.coordinates);
}
 
// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;
 
// Used to increment the value of the point measurement against the route.
let counter = 0;
 
map.on('render', () => {
    //  map.setLayoutProperty('country-label', 'text-field', ['get','name_pol']);

// Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
    'type': 'geojson',
    'data': route
    });
 
    map.addSource('point', {
    'type': 'geojson',
    'data': point
    });
 
    map.addLayer({
    'id': 'route',
    'source': 'route',
    'type': 'line',
    'paint': {
        'line-width': 2,
        'line-color': '#007cbf'
    }
    });
 
    map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'symbol',
        'layout': {
            // This icon is a part of the Mapbox Streets style.
            // To view all images available in a Mapbox style, open
            // the style in Mapbox Studio and click the "Images" tab.
            // To add a new image to the style at runtime see
            // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
            'icon-image': 'airport-15',
            'icon-size': 2,
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });
    map.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#3386c0',
            'fill-opacity': 0.4,
          },
        },
        'country-label'
      );

      map.setFilter('country-boundaries', [
        "in",
        "iso_3166_1_alpha_3",
        'POL'
      ]);
 
    function animate() {
        const start =
        route.features[0].geometry.coordinates[
        counter >= steps ? counter - 1 : counter
        ];
        const end =
        route.features[0].geometry.coordinates[
        counter >= steps ? counter : counter + 1
        ];
        if (!start || !end) return;
        
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point.features[0].geometry.coordinates =
        route.features[0].geometry.coordinates[counter];
        
        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point.features[0].properties.bearing = turf.bearing(
        turf.point(start),
        turf.point(end)
        );
        
        // Update the source with this new data
        map.getSource('point').setData(point);
        
        // Request the next frame of animation as long as the end has not been reached
        if (counter < steps) {
        requestAnimationFrame(animate);
        }
        
        counter = counter + 1;
        // if(counter == 100){
        //     window.setTimeout(100)
        //     // Set the coordinates of the original point back to origin
        //     point.features[0].geometry.coordinates = origin;
            
        //     // Update the source layer
        //     map.getSource('point').setData(point);
    
        //     // Reset the counter
        //     counter = 0;
    
        //     // Restart the animation
        //     animate(counter);
        // }
    }
 
    // document.getElementById('replay').addEventListener('click', () => {
    //     // Set the coordinates of the original point back to origin
    //     point.features[0].geometry.coordinates = origin;
        
    //     // Update the source layer
    //     map.getSource('point').setData(point);
        
    //     // Reset the counter
    //     counter = 0;
        
    //     // Restart the animation
    //     animate(counter);
    // });
    //Start the animation
    animate(counter);

});
// window.onload(function() {
//     // Start the animation
// }, 120);
// animate(0);
