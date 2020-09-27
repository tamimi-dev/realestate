$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ok01ra6/public/values?alt=json", data => {
  var labels = [];
  var china = [];
   var skorea = [];
     var italy = [];
   var japan = [];
     var us = [];
   var france = [];
     var canada = [];
   var spain = [];
     var iran = [];
   var germany = [];
    var switz = [];
 var uk = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$timecase']['$t']);
    china.push(Number(e['gsx$china']['$t']));
	skorea.push(Number(e['gsx$korea']['$t']));
     italy.push(Number(e['gsx$italy']['$t']));
	japan.push(Number(e['gsx$japan']['$t']));
  	us.push(Number(e['gsx$us']['$t']));
    	france.push(Number(e['gsx$france']['$t']));
      	canada.push(Number(e['gsx$canada']['$t']));
        	spain.push(Number(e['gsx$spain']['$t']));
          	iran.push(Number(e['gsx$iran']['$t']));
            	germany.push(Number(e['gsx$germany']['$t']));
              	switz.push(Number(e['gsx$switzerland']['$t']));
	  uk.push(Number(e['gsx$uk']['$t']));

  });
     
    
        var options = {
          series: [
          {
            name: "S. Korea",
            data: skorea
          },
          {
            name: 'Italy',
            data: italy
          },
          {
            name: "Japan",
            data: japan
          },
          {
            name: "United States",
            data: us
          },
          {
            name: "France",
            data: france
          },
          {
            name: "Canada",
            data: canada
          },
          {
            name: "Spain",
            data: spain
          },
          {
            name: "Iran",
            data: iran
          },
          {
            name: "Germany",
            data: germany
          },
          {
            name: "Switzerland",
            data: switz
          },
          {
            name: "UK",
            data: uk
          }
        ],
          colors: ['#ffc107', '#d67f29', '#fd304c', '#00a700', '#c107ff', '#4B3AC5', '#3AC5C4', '#00C9A7', '#C34A36', '#FEFEDF', '#f502f1'],
          chart: {
          height: 500,
          type: 'line',
          foreColor: "#ccc",
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
         width: 2,
       //width: [5, 7, 5],
          curve: 'smooth',
       //   dashArray: [0, 8, 5]
        },
        title: {
          text: 'Cases by day (Exclude China)',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 3
          }
        },
        xaxis: {
          categories: labels,
        },
        tooltip: {
         theme: "dark",
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " "
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " "
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#636363',
        }
        };

        var chart = new ApexCharts(document.querySelector("#canvas3"), options);
        chart.render();
      
  });    
