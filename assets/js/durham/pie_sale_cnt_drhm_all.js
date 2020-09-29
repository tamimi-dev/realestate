 $.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/omp9zhn/public/values?alt=json", data => {
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
                   // customScale: 0.5
     }
  },
          chart: {
          type: 'pie',
            foreColor: '#e0e0e0',
           // background: '#fff',
        },
        labels: labels,
        title: {
          text: 'Total Sales Count'
        },

        legend: {
              position: 'bottom'
            }

   
        };
        var chart = new ApexCharts(document.querySelector("#pie_sale_cnt_drhm_all"), options);
        chart.render();
    });  
 