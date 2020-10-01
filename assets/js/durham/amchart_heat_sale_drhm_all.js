
 async function fetchDatac(url) {
    const jsonDatac = await fetch(url).then(r => r.json());
    const datac = jsonDatac.feed.entry.map(e => ([
      {
          "year": 'Average Sale 2006',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall06.$t
  },{
          "year": 'Average Sale 2007',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall07.$t
  },{
          "year": 'Average Sale 2008',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall08.$t
  },{
          "year": 'Average Sale 2009',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall09.$t
  },{
          "year": 'Average Sale 2010',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall10.$t
  },{
          "year": 'Average Sale 2011',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall11.$t
  },{
          "year": 'Average Sale 2012',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall12.$t
  },{
          "year": 'Average Sale 2013',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall13.$t
  },{
          "year": 'Average Sale 2014',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall14.$t
  },{
          "year": 'Average Sale 2015',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall15.$t
  },{
          "year": 'Average Sale 2016',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall16.$t
  },{
          "year": 'Average Sale 2017',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall17.$t
  },{
          "year": 'Average Sale 2018',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall18.$t
  },{
          "year": 'Average Sale 2019',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall19.$t
  },{
          "year": 'Average Sale 2020',
          "month": e.gsx$label.$t,
          "value": e.gsx$avgsaledrhmall20.$t
  }
  
  
    ]));
    
    handleData(datac);
  }
  
  
  
  fetchDatac("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ob1idvq/public/values?alt=json");
  
  
  
  
  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var chart = am4core.create("amchart_heat_drhm_all", am4charts.XYChart);
  chart.maskBullets = false;
  
  var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  
  yAxis.dataFields.category = "year";
  xAxis.renderer.minGridDistance = 40;
  xAxis.dataFields.category = "month";
  
  xAxis.renderer.grid.template.disabled = true;
  yAxis.renderer.grid.template.disabled = true;
  xAxis.renderer.axisFills.template.disabled = true;
  yAxis.renderer.axisFills.template.disabled = true;
  yAxis.renderer.ticks.template.disabled = true;
  xAxis.renderer.ticks.template.disabled = true;
  
  yAxis.renderer.inversed = true;
  
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = "year";
  series.dataFields.categoryX = "month";
  series.dataFields.value = "value";
  series.columns.template.disabled = true;
  series.sequencedInterpolation = true;
  //series.defaultState.transitionDuration = 3000;
  
  var bullet = series.bullets.push(new am4core.Circle());
  bullet.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
  bullet.strokeWidth = 3;
  bullet.stroke = am4core.color("#ffffff");
  bullet.strokeOpacity = 0;
  
  bullet.adapter.add("tooltipY", function(tooltipY, target) {
      return -target.radius + 1;
  })
  
  series.heatRules.push({
    property: "radius",
    target: bullet,
    min: 2,
    max: 40
  });
  
  bullet.hiddenState.properties.scale = 0.01;
  bullet.hiddenState.properties.opacity = 1;
  
  var hoverState = bullet.states.create("hover");
  hoverState.properties.strokeOpacity = 1;
  
  
  function handleData(datac) {
      chart.data = datac;
  }
  
  
  
  
  
  
  
  