 $.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/4/public/values?alt=json", data => {
  var labels = [];
   var seri = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$piesalecntdrhmalllabels']['$t']);
    seri.push(Number(e['gsx$piesalecntdrhmallvalues']['$t']));
  });
      var options = {
         series: seri,
                plotOptions: {
     pie: {
                    expandOnClick: true
     }
  },
          chart: {
          type: 'pie',
            foreColor: '#e0e0e0'
        },
        labels: labels,
        responsive: [{
          options: {
            chart: {
                     background: '#fff'
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };
        var chart = new ApexCharts(document.querySelector("#pie_sale_cnt_drhm_all"), options);
        chart.render();
    });  
 