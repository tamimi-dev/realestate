
$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/2/public/values?alt=json", data => {
    var labels = [];
    var soldcount17 = [];
     var soldcount18 = [];
       var soldcount19 = [];
     var soldcount20 = [];
  
  
  
  
    data.feed.entry.forEach(e => {
      labels.push(e['gsx$label']['$t']);
  
      soldcount17.push(Number(e['gsx$soldcountsalldrhm17']['$t']));

  
       soldcount18.push(Number(e['gsx$soldcountsalldrhm18']['$t']));

  
          soldcount19.push(Number(e['gsx$soldcountsalldrhm19']['$t']));
 
  
             soldcount20.push(Number(e['gsx$soldcountsalldrhm20']['$t']));

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
            chart: {
           // height: 350,
            type: 'radar',
            background: '#303032',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          title: {
            text: 'Sales Count per Year'
          },
          fill: {
            opacity: 0.3,
           // colors: ['#ffc107', '#d67f29', '#fd304c', '#00a700'],

          },
          stroke: {
            width: 2
          },

          grid: {
            borderColor: '#636363',
          },

          markers: {
            size: 2,
            colors: ['#d67f29'],
            hover: { size: 5 },
          },
          theme: {
            mode: 'dark'
          },
          xaxis: {
            categories: labels,
          },
          tooltip: {
            theme: "dark",
            y: {
              formatter: function(val) {
                return val
              }
            }
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#rdr_sale_cnt_drhm_all"), options);
          chart.render();
        
        }); 