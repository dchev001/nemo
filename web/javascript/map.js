// Mapbox instantiation
mapboxgl.accessToken = 'pk.eyJ1IjoiamZlcm4wNzUiLCJhIjoiY2t0MnpuaXphMHNpMzJ1bnhjeWlxNTQ5MyJ9.o1NOIZ1hRvQcXmR7jxAtLQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/jfern075/ckt5s06110bdx17nk6tcacn53', // style URL
    center: [-80.149, 25.848], // starting position [lng, lat]
    zoom: 12.74 // starting zoom
});


// Buoy 1
const coralGables = new mapboxgl.Marker()
    .setLngLat([-80.26966, 25.72695])
    .addTo(map);

// Buoy 2
const northBiscayneBay = new mapboxgl.Marker()
    .setLngLat([-80.16712, 25.86171])
    .addTo(map);

// Buoy 3
const littleRiver = new mapboxgl.Marker()
    .setLngLat([-80.176921, 25.846346])
    .addTo(map);