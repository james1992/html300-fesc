console.log('linked')
function menuOn() {
    document.getElementById("overlay").style.display = "block";
}

function menuOff() {
    document.getElementById("overlay").style.display = "none";
}

function educationImage(menuItem) {
  if (document.getElementById("homepage") != null){
    document.getElementById("homepage").id = menuItem
    console.log('education')
  } else if(document.getElementById("homepage-education") != null) {
    document.getElementById("homepage-education").id = menuItem
  } else if(document.getElementById("homepage-industry") != null) {
    document.getElementById("homepage-industry").id = menuItem
  } else if(document.getElementById("homepage-outreach") != null) {
    document.getElementById("homepage-outreach").id = menuItem
  } else if(document.getElementById("homepage-research") != null) {
    document.getElementById("homepage-research").id = menuItem
  } else if(document.getElementById("homepage-about") != null) {
    document.getElementById("homepage-about").id = menuItem
  }
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var dataArea = google.visualization.arrayToDataTable([
  ['Year', 'Total Electricity Consumption (Btu)', 'Renewable Energy Production (Btu)'],
  ['1960', 57344, 35680], 
  ['1961', 62705, 34417], 
  ['1962', 71216, 35826], 
  ['1963', 78258, 38613], 
  ['1964', 87016, 39016], 
  ['1965', 95878, 39916], 
  ['1966', 108610, 42760], 
  ['1967', 119314, 44550], 
  ['1968', 135509, 49556], 
  ['1969', 153032, 51489], 
  ['1970', 171346, 51035], 
  ['1971', 188564, 49968], 
  ['1972', 209665, 54389], 
  ['1973', 237104, 56250], 
  ['1974', 235482, 52429], 
  ['1975', 242096, 50007], 
  ['1976', 252408, 56507], 
  ['1977', 270767, 59953], 
  ['1978', 289031, 65357], 
  ['1979', 295551, 69419], 
  ['1980', 309694, 90049], 
  ['1981', 317921, 83117], 
  ['1982', 315744, 104674], 
  ['1983', 329216, 91705], 
  ['1984', 353246, 108740], 
  ['1985', 379307, 110698], 
  ['1986', 398095, 116356], 
  ['1987', 417862, 107606], 
  ['1988', 444382, 113802], 
  ['1989', 472473, 232261], 
  ['1990', 489741, 198986], 
  ['1991', 499299, 212955], 
  ['1992', 501598, 230779], 
  ['1993', 521176, 217028], 
  ['1994', 544365, 215563], 
  ['1995', 571483, 220211], 
  ['1996', 586291, 240343], 
  ['1997', 597240, 231308], 
  ['1998', 639254, 205485], 
  ['1999', 638966, 204114], 
  ['2000', 668216, 194952], 
  ['2001', 684966, 158038], 
  ['2002', 718136, 174327], 
  ['2003', 741696, 188473], 
  ['2004', 745810, 179462], 
  ['2005', 767622, 183175], 
  ['2006', 778685, 185564], 
  ['2007', 788461, 190489], 
  ['2008', 771702, 195232], 
  ['2009', 766848, 213642], 
  ['2010', 788887, 223518], 
  ['2011', 768009, 222956], 
  ['2012', 752941, 220020], 
  ['2013', 757189, 229666], 
  ['2014', 771379, 226863], 
  ['2015', 803865, 234192]
]);
  
var optionsArea = {
  title: 'Florida Energy Consumption vs. Renewable Energy Production',
  hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
  vAxis: {title: 'Billion Btu', minValue: 0},
  legend: {position: 'bottom'}
};

var chartArea = new google.visualization.AreaChart(document.getElementById('chart_div'));
chartArea.draw(dataArea, optionsArea);

var dataLine = google.visualization.arrayToDataTable([
  ['Year', 'Percent of Energy Consumption Generated from Renewable Sources'],          
  ['1960', 0.6222098214285714], 
  ['1961', 0.5488717008213061], 
  ['1962', 0.5030611098629522], 
  ['1963', 0.4934064249022464], 
  ['1964', 0.44837730992001473], 
  ['1965', 0.4163207409416133], 
  ['1966', 0.39370223736304205], 
  ['1967', 0.3733845148096619], 
  ['1968', 0.36570264705665306], 
  ['1969', 0.3364590412462753], 
  ['1970', 0.2978476299417553], 
  ['1971', 0.264992257270741], 
  ['1972', 0.25940905730570196], 
  ['1973', 0.23723766785882988], 
  ['1974', 0.2226454675941261], 
  ['1975', 0.20655855528385433], 
  ['1976', 0.2238716680929289], 
  ['1977', 0.22141915373734614], 
  ['1978', 0.22612453335455365], 
  ['1979', 0.23487993611931612], 
  ['1980', 0.29076766098148493], 
  ['1981', 0.26143916255925215], 
  ['1982', 0.3315154048849701], 
  ['1983', 0.27855572025660963], 
  ['1984', 0.30783080346274266], 
  ['1985', 0.29184275534066073], 
  ['1986', 0.2922819929916226], 
  ['1987', 0.2575156391344511], 
  ['1988', 0.2560904807125401], 
  ['1989', 0.4915857625726761], 
  ['1990', 0.40630864068967065], 
  ['1991', 0.4265079641657604], 
  ['1992', 0.4600875601577359], 
  ['1993', 0.4164197890923604], 
  ['1994', 0.3959898230047854], 
  ['1995', 0.3853325470748911], 
  ['1996', 0.4099380682971425], 
  ['1997', 0.38729488982653537], 
  ['1998', 0.32144499682442346], 
  ['1999', 0.31944422707937514], 
  ['2000', 0.29174997306260253], 
  ['2001', 0.2307238607463728], 
  ['2002', 0.24274928425813494], 
  ['2003', 0.2541108486495815], 
  ['2004', 0.24062696933535352], 
  ['2005', 0.2386265635951028], 
  ['2006', 0.23830432074587285], 
  ['2007', 0.24159596987041845], 
  ['2008', 0.252988848026829], 
  ['2009', 0.27859758387581374], 
  ['2010', 0.28333335446014446], 
  ['2011', 0.2903038896679596], 
  ['2012', 0.29221413098768695], 
  ['2013', 0.3033139678468652], 
  ['2014', 0.29410056535114387], 
  ['2015', 0.2913324998600511]
])

var optionsLine = {
  title: 'Company Performance',
  hAxis: {title: 'Year'},
  vAxis: {title: 'Fraction of Energy Consumption'},
  curveType: 'function',
  legend: {position: 'bottom'}
};

var chartLine = new google.visualization.LineChart(document.getElementById('line_div'));

chartLine.draw(dataLine, optionsLine);
}