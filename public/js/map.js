mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-86.779633, 33.543682], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(coordinates);

// const marker = new mapboxgl.Marker()
//     .setLngLat([])
//     .addTo(map);
