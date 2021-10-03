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
  var x = document.getElementById("mapKeyLegend");
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

// to change the map legend key
function changeLegend()
{
  var x = document.getElementById("dataLayer").value;
  z = document.getElementById("gradNum");
  y = document.getElementsByClassName("gradBox");

  var arr = [];
  var txt = '';  
 
  if (x == 'temp')
  { 
    arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    col = ['blue', 'red', 'orange', 'pink', 'yellow', 'black', 'purple', 'navy', 'red', 'blue'];

    for (x in arr, col)
    { 
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
  else if (x == 'pH_level')
  { 
    arr = ['0-1', '1-2', '2-3', '3-4', '4-5'];
    col = ['red', 'orange', 'orange', 'orange', 'yellow'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
  else if (x == 'odo')
  { 
    arr = ['<1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12>'];
    col = ['purple', 'red', 'orange', 'pink', 'yellow', 'black', 'blue', 'violet', 'green', 'red', 'blue', 'orange', 'green'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
  else if (x == 'salinity')
  { 
    arr = [1, 2, 3, 4];
    col = ['red', 'blue', 'pink', 'yellow'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
  else if (x == 'chlorophyll')
  { 
    arr = [ 1, 2, 3, 4, 5];
    col = ['red', 'white', 'blue', 'green', 'black'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }
  else if (x == 'turbidity')
  { 
    arr = [1, 2, 3];
    col = ['red', 'white', 'blue'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<div class=\"row\"><div class=\"gradBox\"></div><div class=\"label\"><p>' + arr[x] + '</p></div></div>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }
  }  
  else if (x == 'none')
  { 
    arr = [0];
    col = ['white'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<p></p>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    }    
  } 
  else
  { 
    arr = [0];
    col = ['white'];

    for (x in arr, col)
    {
      z.innerHTML = txt + '<p></p>';
      y[x].style.background = col[x];
      txt = z.innerHTML;
    } 
  }   
}
