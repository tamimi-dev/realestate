
$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/otu1nbu/public/values?alt=json", data => {
  var labels1 = [];
  var numbers = [];
   var numbers2 = [];
  data.feed.entry.forEach(e => {
    labels1.push(e['gsx$timecase']['$t']);
    numbers.push(Number(e['gsx$percinc']['$t']));
	numbers2.push(Number(e['gsx$dincreaseall']['$t']));
  }); 
  
var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#00BAEC"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 3,
    colors: ["#000524"],
    strokeColor: "#00BAEC",
    strokeWidth: 3
  },
  series: [{
	  data: numbers2
	  }],
  tooltip: {
    theme: "dark"
  },
  xaxis: {
    categories: labels1,
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

chart1.render();

var options2 = {
  chart: {
    id: "chart1",
    height: 130,
    type: "bar",
    foreColor: "#ccc",
    brush: {
      target: "chart2",
      enabled: true
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4
      },
      xaxis: {
        categories: labels1,
      }
    }
  },
  colors: ["#FF0080"],
  series: [{
	  data: numbers
	  }],
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
 
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
};
  
var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

chart2.render();
});
