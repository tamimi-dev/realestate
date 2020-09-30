
$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ob1idvq/public/values?alt=json", data => {
    var labels = [];

    var avg_sale_drhm_all_06 = [];
    var avg_sale_drhm_all_07 = [];
    var avg_sale_drhm_all_08 = [];
    var avg_sale_drhm_all_09 = [];
    var avg_sale_drhm_all_10 = [];
    var avg_sale_drhm_all_11 = [];
    var avg_sale_drhm_all_12 = [];
    var avg_sale_drhm_all_13 = [];
    var avg_sale_drhm_all_14 = [];
    var avg_sale_drhm_all_15 = [];
    var avg_sale_drhm_all_16 = [];
    var avg_sale_drhm_all_17 = [];
    var avg_sale_drhm_all_18 = [];
    var avg_sale_drhm_all_19 = [];
    var avg_sale_drhm_all_20 = [];



    data.feed.entry.forEach(e => {
      labels.push(e['gsx$label']['$t']);
      avg_sale_drhm_all_06.push(Number(e['gsx$avgsaledrhmall06']['$t']));
      avg_sale_drhm_all_07.push(Number(e['gsx$avgsaledrhmall07']['$t']));
      avg_sale_drhm_all_08.push(Number(e['gsx$avgsaledrhmall08']['$t']));
      avg_sale_drhm_all_09.push(Number(e['gsx$avgsaledrhmall09']['$t']));
      avg_sale_drhm_all_10.push(Number(e['gsx$avgsaledrhmall10']['$t']));
      avg_sale_drhm_all_11.push(Number(e['gsx$avgsaledrhmall11']['$t']));
      avg_sale_drhm_all_12.push(Number(e['gsx$avgsaledrhmall12']['$t']));
      avg_sale_drhm_all_13.push(Number(e['gsx$avgsaledrhmall13']['$t']));
      avg_sale_drhm_all_14.push(Number(e['gsx$avgsaledrhmall14']['$t']));
      avg_sale_drhm_all_15.push(Number(e['gsx$avgsaledrhmall15']['$t']));
      avg_sale_drhm_all_16.push(Number(e['gsx$avgsaledrhmall16']['$t']));
      avg_sale_drhm_all_17.push(Number(e['gsx$avgsaledrhmall17']['$t']));
      avg_sale_drhm_all_18.push(Number(e['gsx$avgsaledrhmall18']['$t']));
      avg_sale_drhm_all_19.push(Number(e['gsx$avgsaledrhmall19']['$t']));
      avg_sale_drhm_all_20.push(Number(e['gsx$avgsaledrhmall20']['$t']));
     
    }); 






        var options = {
            series: [{
            name: 'Average Sale 2006',
            data: avg_sale_drhm_all_06
          },
          {
            name: 'Average Sale 2007',
            data: avg_sale_drhm_all_07
          },
          {
            name: 'Average Sale 2008',
            data: avg_sale_drhm_all_08
          },
          {
            name: 'Average Sale 2009',
            data: avg_sale_drhm_all_09
          },
          {
            name: 'Average Sale 2010',
            data: avg_sale_drhm_all_10
          },
          {
            name: 'Average Sale 2011',
            data: avg_sale_drhm_all_11
          },
          {
            name: 'Average Sale 2012',
            data: avg_sale_drhm_all_12
          },
          {
            name: 'Average Sale 2013',
            data: avg_sale_drhm_all_13
          },
          {
            name: 'Average Sale 2014',
            data: avg_sale_drhm_all_14
          },
          {
            name: 'Average Sale 2015',
            data: avg_sale_drhm_all_15
          },
          {
            name: 'Average Sale 2016',
            data: avg_sale_drhm_all_16
          },
          {
            name: 'Average Sale 2017',
            data: avg_sale_drhm_all_17
          },
          {
            name: 'Average Sale 2018',
            data: avg_sale_drhm_all_18
          },
          {
            name: 'Average Sale 2019',
            data: avg_sale_drhm_all_19
          },
          {
            name: 'Average Sale 2020',
            data: avg_sale_drhm_all_20
          }
          ],
            chart: {
          height: 550,
            type: 'heatmap',
         //   background: '#303032'
          },
          dataLabels: {
            enabled: false
          },
          theme: {
            mode: 'dark'
          },
          colors: ["#de00fb"],
          title: {
            text: 'HeatMap Chart For The Average Sale Since 2006'
          },
          xaxis: {
            type: 'category',
            categories: labels
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
  
          var chart = new ApexCharts(document.querySelector("#heat_sale_drhm_all"), options);
          chart.render();
        }); 