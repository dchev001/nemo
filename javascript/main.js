// mapbox info
mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZXYwMDEiLCJhIjoiY2t0NmtzaDZrMGpnODJvbGFiZWM0aGM5MCJ9.11rBAOn9SrSUYjN87mGGmA';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/dchev001/cktgaj42i13bv17mwintmkns2', // style URL
  center: [-80.15, 25.78], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

// add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// add scale control to the map
const scale = new mapboxgl.ScaleControl({
  maxWidth: 100,
  unit: 'imperial'
});
map.addControl(scale, 'bottom-right');
scale.setUnit('imperial');

// create a default marker and add it to the map
const marker1 = new mapboxgl.Marker({color: '#081E3F'})
.setLngLat([-80.26966, 25.72695])
.addTo(map);
  
const marker2 = new mapboxgl.Marker({color: '#081E3F'})
.setLngLat([-80.16712, 25.86171])
.addTo(map);
  
const marker3 = new mapboxgl.Marker({color: '#081E3F'})
.setLngLat([-80.176921, 25.846346])
.addTo(map);

// create Layer class with methods
class Layer {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  getName() { return this.name; }
  getStatus() { return this.status; }
  setName(name) { this.name = name; }
  setStatus(status) { this.status = status; }

  toString() {
    console.log(this.name + " : " + this.status);
  }
}

// create layer objects
var ph_arr = new Layer('ph', false);
var temp_arr = new Layer('temp', false);
var odo_arr = new Layer('odo', false);
var salinity_arr = new Layer('salinity', false);
var turbidity_arr = new Layer('turbidity', false);
var chlorophyll_arr = new Layer('chlorophyll', false);

// create array
let layers = [];
layers.push(ph_arr);
layers.push(temp_arr);
layers.push(odo_arr);
layers.push(salinity_arr);
layers.push(turbidity_arr);
layers.push(chlorophyll_arr);

// remove layers/source
function removeLayers()
{
  for (x in layers)
  {
    if (layers[x].getStatus() == true)
    {
      map.removeLayer(layers[x].getName());
    }
  }
}

// to display certain layers for map styles
function showOnlyActiveLayers()
{
  for (x in layers)
  {
    if (layers[x].getStatus() == true)
    {
      map.addLayer(layers[x].getName());
    }
  }
}

// to show the map layers
function showMapSubMenu()
{
  var styles = document.getElementById("mapStyles");
  var layers = document.getElementById("mapLayers");
  var legend = document.getElementById("mapKey");

  if (styles.style.display === "block")
  {
    styles.style.display = "none";
  }
  else
  {
    styles.style.display = "block";
    layers.style.display = "none";
    legend.style.display = "none";
  }
}

// to show the data layers
function showDataLayers()
{
  var styles = document.getElementById("mapStyles");
  var layers = document.getElementById("mapLayers");
  var legend = document.getElementById("mapKey");

  if (layers.style.display === "block")
  {
    layers.style.display = "none";
    legend.style.display = "none";
  }
  else
  {
    layers.style.display = "block";
    styles.style.display = "none";
  }
}

// to show data info box
function showDataInfoBox()
{
  var box = document.getElementById("dataInfoBox");

  if (box.style.display === "block")
  {
    box.style.display = "none";
  }
  else
  {
    box.style.display = "block";
  }
}

// to change between map styles
function changeMap(val)
{
  map.setStyle('mapbox://styles/mapbox/' + val);
  //showOnlyActiveLayers();
  map.on('load', () => {console.log("even occured");});
}

// to change the map legend key
function changeLegend(val)
{
  document.getElementById("mapKey").style.display = "block";

  z = document.getElementById("gradNum");
  y = document.getElementsByClassName("gradBox");

  if (val == 'temp_level')
  { 
    arr = ['< 30 °C', '30 - 31 °C', '31 - 32 °C', '32 - 33 °C', '33 °C >'];
    col = ['green', 'red', 'blue', 'yellow', 'purple'];
    disLegend(arr, col);

    removeLayers();

    temp_arr.setStatus(true);
    addLayerTemp();
    dataPoints('temp');
  }

  if (val == 'pH_level')
  { 
    arr = ['< 7.0', '7.0 - 7.5', '7.5 - 7.75', '7.75 - 8.0', '8.0 > '];
    col = ['red', 'blue', 'green', 'yellow', 'orange'];
    disLegend(arr, col);

    removeLayers();

    ph_arr.setStatus(true);
    addLayerPh();
    dataPoints('ph');
  }

  if (val == 'odo_level')
  { 
    arr = ['< 2 mg/L', '2 - 3 mg/L', '3 - 4 mg/L', '4 - 5 mg/L', '5 mg/L >'];
    col = ['purple', 'red', 'orange', 'pink', 'blue'];
    disLegend(arr, col);

    removeLayers();

    odo_arr.setStatus(true);
    addLayerOdo();
    dataPoints('odo');
  }

  if (val == 'sal_level')
  { 
    arr = [' < 25 psu', '25 - 27 psu', '27 - 29 psu', ' 29 psu >' ];
    col = ['red', 'green', 'blue', 'yellow'];
    disLegend(arr, col);

    removeLayers();
    
    salinity_arr.setStatus(true);
    addLayerSalinity();
    dataPoints('salinity');
  }

  if (val == 'ch_level')
  { 
    arr = [' < 2 ug/L', '2 - 5 ug/L', ' 5 ug/L >'];
    col = ['red', 'blue', 'green'];
    disLegend(arr, col);

    removeLayers();
    
    chlorophyll_arr.setStatus(true);
    addLayerCholrophyll();
    dataPoints('chlorophyll');
  }

  if (val == 'tur_level')
  { 
    arr = ['< 10 FNU', '10 - 20 FNU', '20 FNU > '];
    col = ['red', 'blue', 'orange'];  
    disLegend(arr, col);

    removeLayers();

    turbidity_arr.setStatus(true);
    addLayerTurbidity();
    dataPoints('turbidity');
  }
}

function disLegend(arr, col)
{
  var txt = ''; 
  for (x in arr, col)
  {
    z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
    y[x].style.background = col[x];
    txt = z.innerHTML;
  }
}

