// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create("amchart_clock", am4charts.GaugeChart);
chart.exporting.menu = new am4core.ExportMenu();

chart.startAngle = -90;
chart.endAngle = 270;

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = 12;
axis.strictMinMax = true;

axis.renderer.line.strokeWidth = 8;
axis.renderer.line.strokeOpacity = 1;
axis.renderer.minLabelPosition = 0.05; // hides 0 label
axis.renderer.inside = true;
axis.renderer.labels.template.radius = 35;
axis.renderer.axisFills.template.disabled = true;
axis.renderer.grid.template.disabled = true;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.length = 12;
axis.renderer.ticks.template.strokeOpacity = 1;

// inner axis

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = 60;
axis2.renderer.radius = am4core.percent(25);
axis2.strictMinMax = true;
axis2.renderer.minLabelPosition = 0.05;
axis2.renderer.ticks.template.length = 9;
axis2.renderer.ticks.template.strokeOpacity = 1;
axis2.renderer.ticks.template.disabled = false;
axis2.renderer.inside = true;
axis2.renderer.grid.template.disabled = true;
axis2.renderer.labels.template.disabled = true;

axis2.renderer.minGridDistance = 1;


// serves as a clock face fill
var range = axis.axisRanges.create();
range.startValue = 0;
range.endValue = 12;
range.grid.visible = false;
range.tick.visible = false;
range.label.visible = false;

var axisFill = range.axisFill;
axisFill.fillOpacity = 1;
axisFill.disabled = false;
axisFill.fill = new am4core.InterfaceColorSet().getFor("fill");

/**
 * Label
 */

var label = chart.radarContainer.createChild(am4core.Label);
label.isMeasured = false;
label.fontSize = 20;
label.horizontalCenter = "middle";
label.verticalCenter = "middle";

var date = new Date();
var dateStr = axis2.dateFormatter.format(date, "MMM dd")
label.text = dateStr;

// hands
var hourHand = chart.hands.push(new am4charts.ClockHand());
hourHand.radius = am4core.percent(85);
hourHand.innerRadius = am4core.percent(30);
hourHand.startWidth = 10;
hourHand.endWidth = 10;
hourHand.rotationDirection = "clockWise";
hourHand.pin.disabled = true;
hourHand.zIndex = 0;

var minutesHand = chart.hands.push(new am4charts.ClockHand());
minutesHand.radius = am4core.percent(100);
minutesHand.innerRadius = am4core.percent(30);
minutesHand.rotationDirection = "clockWise";
minutesHand.startWidth = 7;
minutesHand.endWidth = 7;
minutesHand.pin.disabled = true;
minutesHand.zIndex = 1;

var secondsHand = chart.hands.push(new am4charts.ClockHand());
secondsHand.radius = am4core.percent(25);
secondsHand.innerRadius = am4core.percent(20);
secondsHand.fill = am4core.color("#DD0000");
secondsHand.stroke = am4core.color("#DD0000");
secondsHand.rotationDirection = "clockWise";
secondsHand.zIndex = 2;
secondsHand.startWidth = 8;
secondsHand.endWidth = 8;
secondsHand.pin.disabled = true;

updateHands();

setInterval(function() {
  updateHands();
}, 1000);

function updateHands() {
  // get current date
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // set hours
  hourHand.showValue(hours + minutes / 60, 0);
  // set minutes
  minutesHand.showValue(12 * (minutes + seconds / 60) / 60, 0);
  // set seconds
  secondsHand.showValue(12 * date.getSeconds() / 60, 300);
}