// map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZXYwMDEiLCJhIjoiY2t0NmtzaDZrMGpnODJvbGFiZWM0aGM5MCJ9.11rBAOn9SrSUYjN87mGGmA';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/dchev001/cktgaj42i13bv17mwintmkns2', // style URL
  center: [-80.15, 25.78], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

// add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// create a default marker and add it to the map
const marker1 = new mapboxgl.Marker()
.setLngLat([-80.26966, 25.72695])
.addTo(map);
  
const marker2 = new mapboxgl.Marker()
.setLngLat([-80.16712, 25.86171])
.addTo(map);
  
const marker3 = new mapboxgl.Marker()
.setLngLat([-80.176921, 25.846346])
.addTo(map);


// to show the map layers
function showMapSubMenu()
{
  var x = document.getElementById("layerConsole");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}


// to change between map styles
function changeMap(val)
{
  map.setStyle('mapbox://styles/mapbox/' + val);
}
