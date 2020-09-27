$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ok01ra6/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
   var numbers2 = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$timecase']['$t']);
    numbers.push(Number(e['gsx$percinc']['$t']));
	numbers2.push(Number(e['gsx$dincreaseall']['$t']));
  });
  new Chart(document.getElementById('canvas2').getContext("2d"), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Daily % Change',
        data: numbers,
        backgroundColor: 'rgb(153, 102, 255)',
        borderColor: 'rgb(153, 102, 255)',
        pointBackgroundColor: 'rgb(240,236,211)',
	 yAxisID: 'percent',
        type: 'line'
      },
{
        label: 'Daily Increase',
        data: numbers2,
        backgroundColor: 'rgb(255, 159, 64)',
        borderColor: 'rgb(255, 159, 64)',
        pointBackgroundColor: 'rgb(240,236,211)'
      }
	  ] 
    },
    options: {
	    scales: {
	    yAxes: [{
	     id: 'percent',
	    type: 'logarithmic',
	    ticks: {
          beginAtZero: true,
        }
	    }]
    
    },
      	  maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
        }
      }
    }
  });
});
