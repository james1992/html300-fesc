google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(getData);

function drawBasic(freshData) {
  console.log("freshData", freshData)
  freshData.unshift(["Year", "Billion BTUs"])

  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Energy Consumption in Florida',
    hAxis: {title: 'Billion Btu', minValue: 0},
    vAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    legend: {position: 'bottom'}
  };

  var chart = new google.visualization.BarChart(document.getElementById('consumption_div'));

  chart.draw(data, options);
}

function drawRenewable(freshData) {
  console.log("freshData", freshData)
  freshData.unshift(["Year", "Billion BTUs"])

  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Energy Production in Florida',
    hAxis: {title: 'Billion Btu', minValue: 0},
    vAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    legend: {position: 'bottom'}
    };

  var chart = new google.visualization.BarChart(document.getElementById('production_div'));

  chart.draw(data, options);
}


function getData(){
  getConsumption()
  getProduction()        
}

function getConsumption(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "http://api.eia.gov/series/?api_key=dd0e9814d01f3a55287479f941b9049f&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let ConsumptionData = JSON.parse(request.response).series[0].data

    drawBasic(ConsumptionData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

function getProduction(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "http://api.eia.gov/series/?api_key=dd0e9814d01f3a55287479f941b9049f&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let RenewableData = JSON.parse(request.response).series[0].data

    drawRenewable(RenewableData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}