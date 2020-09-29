function fetchCheckStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
  
  function loadData(url) {
    var option = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };
  
    return fetch(url, option)
      .then(fetchCheckStatus)
      .then(function(resp) {
        var contentType = resp.headers.get("Content-Type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return resp.json();
        } else {
          return resp.text();
        }
      })
      .then(function(data1) {
        return data1;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema1 = [{
      "name": "Time",
      "type": "date",
      "format": "%-d/%-m/%Y" // NEW fixed format
    }, {
      "name": "DOM Durham",
      "type": "number"
    }, {
      "name": "DOM Oshawa",
      "type": "number"
    }];
  
  
  var data1, dataStore1;
  
  
  function formatJSON(entries) {
      var formattedJSON = [];
    entries.forEach(item => formattedJSON.push([item.gsx$date.$t, parseFloat(item.gsx$avgdomalldrhm.$t), parseFloat(item.gsx$avgdomallosh.$t)]));
    return formattedJSON; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/1/public/values?alt=json"
    )
  ]).then(function(res) {
    data1 = formatJSON(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore1 = new FusionCharts.DataStore(data1, schema1);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "chart-container_dom",
      id: "DOM_all",
      width: "100%",
      height: "100%",
      dataSource: {
        chart: {
          multiCanvas: true,
          canvasHeightProportion: "1:1",
          "theme": "candy",
        },
        caption: {
          text: "Days on Market"
        },
        subcaption: {
          text: "The average days on market on Durham and Oshawa"
        },
        yAxis: [
          {
            plot: {
              value: "Avg Sale Prices",
              type: "line"
            },
            title: "DOM Durham",
            format: {
              prefix: "days"
            }
          },
          {
            plot: {
              value: "Change in Avg Sale Prices",
              type: "line"
            },
            title: "DOM Oshawa",
            format: {
                prefix: "days"
              }
          }
        ],
        data: dataStore1.getDataTable()
      }
    }).render();
  });
  