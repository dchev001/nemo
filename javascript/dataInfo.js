map.on('load', () => {
    map.addSource('data_all', {
      'type' : 'geojson',
      'data' : './biscayne.geojson'
    });
  
    
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
  
    let hoverStatus = null;
  
    map.on('mouseenter', 'temp', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      
      const temp_val = e.features[0].properties["Temp °C"];
      const ph_val = e.features[0].properties["pH"];
      const odo_val = e.features[0].properties["ODO mg/L"];
      const turbidity_val = e.features[0].properties["Turbidity FNU"];
      const salinity_val = e.features[0].properties["Sal psu"];
      const chlorophyll_val = e.features[0].properties["Chlorophyll ug/L"];
      const date_val = e.features[0].properties["Timestamp"];
    
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
  
      document.getElementById("temp_info").innerHTML = temp_val;
      document.getElementById("time_info").innerHTML = full_time;
      document.getElementById("ph_info").innerHTML = ph_val;
      document.getElementById("odo_info").innerHTML = odo_val;
      document.getElementById("turbidity_info").innerHTML = turbidity_val;
      document.getElementById("salinity_info").innerHTML = salinity_val;
      document.getElementById("chlorophyll_info").innerHTML = chlorophyll_val;
      document.getElementById("date_info").innerHTML = full_date;
    });
  
    map.on('mouseleave', 'temp', () => {
      map.getCanvas().style.cursor = '';
  
      document.getElementById("temp_info").innerHTML = '';
      document.getElementById("time_info").innerHTML = '';
      document.getElementById("ph_info").innerHTML = '';
      document.getElementById("odo_info").innerHTML = '';
      document.getElementById("turbidity_info").innerHTML = '';
      document.getElementById("salinity_info").innerHTML = '';
      document.getElementById("chlorophyll_info").innerHTML = '';
      document.getElementById("date_info").innerHTML = '';
    });
  });
  
  