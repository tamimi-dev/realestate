$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ob1idvq/public/values?alt=json", data => {
    var labels = [];
    var al17 = [];
     var al18 = [];
     var al19 = [];
     var al20 = [];
    data.feed.entry.forEach(e => {
      labels.push(e['gsx$label']['$t']);
      al17.push(Number(e['gsx$al17']['$t']));
      al18.push(Number(e['gsx$al18']['$t']));
      al19.push(Number(e['gsx$al19']['$t']));
      al20.push(Number(e['gsx$al20']['$t']));
    }); 






var options = {
    chart: {
        foreColor: "#f2f2f2",
        background: '#303032'
    },
    series: [{
    name: 'Active Listing 2017',
    data: al17
  }, {
    name: 'Active Listing 2018',
    data: al18
  }, {
    name: 'Active Listing 2019',
    data: al19
  }, {
    name: 'Active Listing 2020',
    data: al20
  }],
    chart: {
    type: 'bar',
    height: 500
  },
  title: {
    text: 'Active Listings',
    align: 'left'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
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
      text: 'Active Listings (Units)'
    }
  },
  fill: {
    opacity: 1
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " Units"
      }
    },
    theme: "dark"
  },
  grid: {
    borderColor: '#636363',
  },
  theme: {
   // mode: 'dark',
    shadeTo: 'dark',
    palette: 'palette1'
    }
  };

  var chart = new ApexCharts(document.querySelector("#al_drhm_all"), options);
  chart.render();

});
  