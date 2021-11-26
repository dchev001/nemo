map.on('load', () => {
  map.addSource('data_all', {
    'type' : 'geojson',
    'data' : './biscayne.geojson' // location of geojson file
  });
});


/* Layer for temp */
function addLayerTemp()
{
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

  /* Layer for ph */
function addLayerPh()
{
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

/* Layer for odo */
function addLayerOdo()
{
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

/* Layer for salinty */
function addLayerSalinity()
{
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

/* Layer for chlorophyll */
function addLayerCholrophyll()
{
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
        'blue',
        5.0,
        'green'
      ],
      'circle-opacity': 0.7
    },        
  });
}

/* Layer for turbidity */
function addLayerTurbidity()
{
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


function dataPoints(selectLayer)
{
  /* data hover point info process */
  let hoverStatus = null;

  /* when mouse hover on data point */
  map.on('mouseenter', selectLayer, (e) => {
    map.getCanvas().style.cursor = 'pointer';

    /* get info from geojson file  */
    const temp_val = e.features[0].properties["Temp °C"];
    const ph_val = e.features[0].properties["pH"];
    const odo_val = e.features[0].properties["ODO mg/L"];
    const turbidity_val = e.features[0].properties["Turbidity FNU"];
    const salinity_val = e.features[0].properties["Sal psu"];
    const chlorophyll_val = e.features[0].properties["Chlorophyll ug/L"];
    const date_val = e.features[0].properties["Timestamp"];

    /* setup the date */
    dt = new Date(date_val);
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    full_months = months[dt.getMonth()];

    full_date = full_months + " " + dt.getDate() + ", " + dt.getFullYear();   

    if (dt.getHours() > 12 ? ampm = 'pm' : ampm = 'am');
    if (dt.getHours() > 12 ? hr = dt.getHours()-12 : hr = dt.getHours());
    if (hr <=9 ? hr = '0'+ hr : hr);
    if (dt.getMinutes() <= 9 ? mnt = '0' + dt.getMinutes() : mnt = dt.getMinutes()); 
    if (dt.getSeconds() <= 9 ? sec = '0' + dt.getSeconds() : sec = dt.getSeconds());

    full_time = hr + ":" + mnt + ":" + sec + " " + ampm;  

    //full_time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    /* put data point info onto map */
    document.getElementById("temp_info").innerHTML = temp_val;
    document.getElementById("time_info").innerHTML = full_time;
    document.getElementById("ph_info").innerHTML = ph_val;
    document.getElementById("odo_info").innerHTML = odo_val;
    document.getElementById("turbidity_info").innerHTML = turbidity_val;
    document.getElementById("salinity_info").innerHTML = salinity_val;
    document.getElementById("chlorophyll_info").innerHTML = chlorophyll_val;
    document.getElementById("date_info").innerHTML = full_date;
  });

  /* when mouse hover off data point */
  map.on('mouseleave', selectLayer, () => {
    map.getCanvas().style.cursor = '';

    /* to clear data point info */
    document.getElementById("temp_info").innerHTML = '';
    document.getElementById("time_info").innerHTML = '';
    document.getElementById("ph_info").innerHTML = '';
    document.getElementById("odo_info").innerHTML = '';
    document.getElementById("turbidity_info").innerHTML = '';
    document.getElementById("salinity_info").innerHTML = '';
    document.getElementById("chlorophyll_info").innerHTML = '';
    document.getElementById("date_info").innerHTML = '';
  });
}