$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ooebdkx/public/values?alt=json", data => {
   // var labels = [];
    var range_200_300 = [];
     var range_300_400 = [];
     var range_400_500 = [];
     var range_500_600 = [];
     var range_600_700 = [];
     var range_700_800 = [];
    data.feed.entry.forEach(e => {
     // labels.push(e['gsx$label']['$t']);
      range_200_300.push(Number(e['rng200300drhmall']['$t']));
      range_300_400.push(Number(e['rng300400drhmall']['$t']));
      range_400_500.push(Number(e['rng400500drhmall']['$t']));
      range_500_600.push(Number(e['rng500600drhmall']['$t']));
      range_600_700.push(Number(e['rng600700drhmall']['$t']));
      range_700_800.push(Number(e['rng700800drhmall']['$t']));
     
    }); 






var options = {

    series: [{
    name: 'Average Sale Price Range 200K ~ 300K',
    data: range_200_300
  }, {
    name: 'Average Sale Price Range 300K ~ 400K',
    data: srange_300_400
  }, {
    name: 'Average Sale Price Range 400K ~ 500K',
    data: range_400_500
  }, {
    name: 'Average Sale Price Range 500K ~ 600K',
    data: range_500_600
  }, {
    name: 'Average Sale Price Range 600K ~ 700K',
    data: range_600_700 
  }, {
    name: 'Average Sale Price Range 700K ~ 800K',
    data: range_700_800
  }],
    chart: {
    type: 'bar',
   // height: 200,
      background: '#303032',
  },
  title: {
    text: 'Average Sale Price Distribution',

    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#dedede'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,

    formatter: function (val) {
        return val + "CAD$";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#dedede"]
      }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ["200K ~ 300K", "300K ~ 400K", "400K ~ 500K", "500K ~ 600K", "600K ~ 700K", "700K ~ 800K"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }

  },
  yaxis: {
    title: {
      text: 'Sale Counts',

      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }

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
    palette: 'palette6'
    }
  };

  var chart = new ApexCharts(document.querySelector("#range_avg_sale_drhm_all"), options);
  chart.render();

});
  









