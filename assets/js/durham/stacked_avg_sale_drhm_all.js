$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ob1idvq/public/values?alt=json", data => {
    var labels = [];
    var stacked_avg_sale_17 = [];
     var stacked_avg_sale_18 = [];
     var stacked_avg_sale_19 = [];
     var stacked_avg_sale_20 = [];
    data.feed.entry.forEach(e => {
      labels.push(e['gsx$label']['$t']);
      stacked_avg_sale_17.push(Number(e['gsx$avgsaledrhmall17']['$t']));
      stacked_avg_sale_18.push(Number(e['gsx$avgsaledrhmall18']['$t']));
      stacked_avg_sale_19.push(Number(e['gsx$avgsaledrhmall19']['$t']));
      stacked_avg_sale_20.push(Number(e['gsx$avgsaledrhmall20']['$t']));
    }); 






var options = {

    series: [{
    name: 'Average Sale Price 2017',
    data: stacked_avg_sale_17
  }, {
    name: 'Average Sale Price 2018',
    data: stacked_avg_sale_18
  }, {
    name: 'Average Sale Price 2019',
    data: stacked_avg_sale_19
  }, {
    name: 'Average Sale Price 2020',
    data: stacked_avg_sale_20
  }],
    chart: {
    type: 'bar',
   // height: 500,
      background: '#303032',
  },
  title: {
    text: 'Average Sale Price Per Month Comparison For The Last 4 Years',
    align: 'left'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: labels,
  },
  yaxis: {
    title: {
      text: 'Average Sale Price (CAD $)'
    }
  },
  fill: {
    opacity: 1
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " CAD$"
      }
    },
    theme: "dark"
  },
  grid: {
    borderColor: '#636363',
  },
  theme: {
    mode: 'dark',
    shadeTo: 'dark',
    palette: 'palette1'
    }
  };

  var chart = new ApexCharts(document.querySelector("#stacked_avg_sale_drhm_all"), options);
  chart.render();

});
  