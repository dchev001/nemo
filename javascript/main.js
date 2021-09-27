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
  var x = document.getElementById("mapConsole");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

// to show the data layers
function showDataLayers()
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

// to change the gradient in the layer console
function changeLegendGradient() 
{
  var x = document.getElementById("dataLayer").value;
  var y = document.getElementById("grad");

  if (x == 'temp')
  {
    y.style.background = "linear-gradient(to right, green, white, red)";
  }
  else if (x == 'pH_level')
  {
    y.style.background = "linear-gradient(to right, blue, white, red)";
  }
  else if (x == 'odo')
  {
    y.style.background = "linear-gradient(to right, yellow, red, orange)";  
  }
  else if (x == 'salinity')
  {
    y.style.background = "linear-gradient(to right, green, white, red, green)";
  }
  else if (x == 'chlorophyll')
  {
    y.style.background = "linear-gradient(to right, blue, white, blue, white)";
  }
  else if (x == 'turbidity')
  {
    y.style.background = "linear-gradient(to right, blue, red, blue, green)";
  }
  else if (x == 'none')
  {
    y.style.background = "linear-gradient(to right, white, white)";
  }
  else
  {
    y.style.background = "linear-gradient(to right, white, white)";
  }
}

