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

// to show the map layers
function showMapSubMenu()
{
  var map = document.getElementById("mapConsole");
  var lay = document.getElementById("mapLegend");

  if (map.style.display === "block")
  {
    map.style.display = "none";
  }
  else
  {
    map.style.display = "block";
    lay.style.display = "none";
  }
}

// to show the data layers
function showDataLayers()
{
  var map = document.getElementById("mapConsole");
  var lay = document.getElementById("mapLegend");

  if (lay.style.display === "block")
  {
    lay.style.display = "none";   
  }
  else
  {
    lay.style.display = "block";
    map.style.display = "none";
  }
}

// to change between map styles
function changeMap(val)
{
  map.setStyle('mapbox://styles/mapbox/' + val);
}

// to change the map legend key
function changeLegend()
{
  x = document.getElementById("dataLayer").value;
  z = document.getElementById("gradNum");
  y = document.getElementsByClassName("gradBox");

  if (x == 'temp')
  { 
    arr = ['< 30', '30 - 31', '31-32', '32-33', '33 >'];
    col = ['green', 'red', 'blue', 'yellow', 'purple'];

    disLegend(arr, col);

    /* Layer for temp */
    map.addLayer({
      'id' : 'temp',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'Temp °C'],
          5,
          30.0,
          6.5,
          31.0,
          8,
          32.0,
          9.5,
          33.0,
          10,
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'Temp °C'],
          'green',
          30.0,
          'red',
          31.0,
          'blue',
          32.0,
          'yellow',
          33.0,
          'purple',
        ],
        'circle-opacity': 0.7
      },        
    });
  }

  if (x == 'pH_level')
  { 
    arr = ['< 7.0', '7.0-7.5', '7.5-7.75', '7.75-8.0', '8.0 > '];
    col = ['red', 'blue', 'green', 'yellow', 'orange'];
    
    disLegend(arr, col);

    /* Layer for ph */
    map.addLayer({
      'id' : 'ph',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'pH'],
          5,
          7.0,
          6,
          7.5,
          7,
          7.75,
          8,
          8.0,
          9
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        //'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'pH'],
          'red',
          7.0,
          'blue',
          7.5,
          'green',
          7.75,
          'yellow',
          8.0,
          'orange',
        ],
        'circle-opacity': 0.7
      },        
    });
  }

  if (x == 'odo')
  { 
    arr = ['< 2', '2-3', '3-4', '4-5', '5 >'];
    col = ['purple', 'red', 'orange', 'pink', 'blue'];

    disLegend(arr, col);

    /* Layer for odo */
    map.addLayer({
      'id' : 'odo',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'ODO mg/L'],
          5,
          2.0,
          6,
          3.0,
          7,
          4.0,
          8,
          5.0,
          9
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        //'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'ODO mg/L'],
          'purple',
          2.0,
          'red',
          3.0,
          'orange',
          4.0,
          'pink',
          5.0,
          'blue',
        ],
        'circle-opacity': 0.7
      },        
    });
  }

  if (x == 'salinity')
  { 
    arr = [' < 25', '25-27', '27-29', ' 29 >' ];
    col = ['red', 'green', 'blue', 'yellow'];
   
    disLegend(arr, col);

    /* Layer for salinty */
    map.addLayer({
      'id' : 'salinity',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'Sal psu'],
          5,
          25.0,
          6.5,
          27.0,
          8,
          29.0,
          9.5,
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'Sal psu'],
          'red',
          25.0,
          'green',
          27.0,
          'blue',
          29.0,
          'yellow'
        ],
        'circle-opacity': 0.7
      },        
    });
  }

  if (x == 'chlorophyll')
  { 
    arr = [' < 2', '2-5', ' 5 >'];
    col = ['red', 'blue', 'green'];
   
    disLegend(arr, col);

    /* Layer for chlorophyll */
    map.addLayer({
      'id' : 'chlorophyll',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'Chlorophyll ug/L'],
          5,
          2.0,
          3,
          5.0,
          4
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'Chlorophyll ug/L'],
          'red',
          2.0,
          'green',
          5.0,
          'blue'
        ],
        'circle-opacity': 0.7
      },        
    });
  }

  if (x == 'turbidity')
  { 
    arr = ['< 10', '10-20', '20 > '];
    col = ['red', 'blue', 'orange'];
   
    disLegend(arr, col);

    /* Layer for turbidity */
    map.addLayer({
      'id' : 'turbidity',
      'type' : 'circle',
      'source' : 'data_all',
      paint: {
        'circle-radius': [
          'step',
          ['get', 'Turbidity FNU'],
          5,
          10.0,
          6,
          20.0,
          8
        ],
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.1
          ],
        'circle-stroke-color': '#000',
        'circle-color': [
          'step',
          ['get', 'Turbidity FNU'],
          'red',
          10.0,
          'blue',
          20.0,
          'orange'
        ],
        'circle-opacity': 0.7
      },        
    });
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
