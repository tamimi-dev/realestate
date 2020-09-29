$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ob1idvq/public/values?alt=json", data => {
    var labels = [];
    var nl17 = [];
     var nl18 = [];
     var nl19 = [];
     var nl20 = [];
    data.feed.entry.forEach(e => {
      labels.push(e['gsx$label']['$t']);
      nl17.push(Number(e['gsx$nl17']['$t']));
      nl18.push(Number(e['gsx$nl18']['$t']));
      nl19.push(Number(e['gsx$nl19']['$t']));
      nl20.push(Number(e['gsx$nl20']['$t']));
    }); 






var options = {
    
    series: [{
    name: 'New Listing 2017',
    data: nl17
  }, {
    name: 'New Listing 2018',
    data: nl18
  }, {
    name: 'New Listing 2019',
    data: nl19
  }, {
    name: 'New Listing 2020',
    data: nl20
  }],
    chart: {
    type: 'bar',
  //  height: 500
    background: '#303032',
  },
  title: {
    text: 'New Listings',
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
      text: 'New Listings (Units)'
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
    mode: 'dark',
    shadeTo: 'dark',
    palette: 'palette1'
    }
  };

  var chart = new ApexCharts(document.querySelector("#nl_drhm_all"), options);
  chart.render();

});
  