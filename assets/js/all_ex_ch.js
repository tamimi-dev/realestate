$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/2/public/values?alt=json", data => {
  var labels = [];
  var soldcount17 = [];
   var soldcount18 = [];
     var soldcount19 = [];
   var soldcount20 = [];




  data.feed.entry.forEach(e => {
    labels.push(e['gsx$date17']['$t']);

    soldcount17.push(Number(e['gsx$soldcountsalldrhm17']['$t']));
//	al17.push(Number(e['gsx$al17']['$t']));
  //   nl17.push(Number(e['gsx$nl17']['$t']));

     soldcount18.push(Number(e['gsx$soldcountsalldrhm18']['$t']));
    // al18.push(Number(e['gsx$al18']['$t']));
      //  nl18.push(Number(e['gsx$nl18']['$t']));

        soldcount19.push(Number(e['gsx$soldcountsalldrhm19']['$t']));
      //  al19.push(Number(e['gsx$al19']['$t']));
        //   nl19.push(Number(e['gsx$nl19']['$t']));

           soldcount20.push(Number(e['gsx$soldcountsalldrhm20']['$t']));
         //  al20.push(Number(e['gsx$al20']['$t']));
            //  nl20.push(Number(e['gsx$nl20']['$t']));
  });
     
    
        var options = {
          series: [
          {
            name: "Number of Sales 2017",
            data: soldcount17
          },
          {
            name: 'Number of Sales 2018',
            data: soldcount18
          },
          {
            name: "Number of Sales 2019",
            data: soldcount19
          },
          {
            name: "Number of Sales 2020",
            data: soldcount20
          }
        ],
          colors: ['#ffc107', '#d67f29', '#fd304c', '#00a700', '#c107ff', '#4B3AC5', '#3AC5C4', '#00C9A7', '#C34A36', '#FEFEDF', '#f502f1'],
          chart: {
          height: 300,
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
          text: 'Number of Sales',
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
