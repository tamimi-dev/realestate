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
      .then(function(data) {
        return data;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema = [{
      "name": "Time",
      "type": "date",
      "format": "%-d/%-m/%Y" // NEW fixed format
    }, {
      "name": "Change in Avg Sale Prices",
      "type": "number"
    }, {
      "name": "Avg Sale Prices",
      "type": "number"
    }];
  
  
  var data, dataStore;
  
  
  function formatJSON(entries) {
      var formattedJSON = [];
    entries.forEach(item => formattedJSON.push([item.gsx$date.$t, parseFloat(item.gsx$changeavgsalepricesalldrhm.$t), parseFloat(item.gsx$avgsalepricesalldrhm.$t)]));
    return formattedJSON; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/om4gaa5/public/values?alt=json"
    )
  ]).then(function(res) {
    data = formatJSON(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore = new FusionCharts.DataStore(data, schema);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "chart-container",
      id: "avg_sale_all",
      width: "100%",
      height: "100%",
      dataSource: {
        chart: {
          multiCanvas: true,
          canvasHeightProportion: "2:1",
          "theme": "candy",
        },
        caption: {
          text: "Average Sales Price"
        },
        subcaption: {
          text: "The average of  the sales price and the changes"
        },
        yAxis: [
          {
            plot: {
              value: "Avg Sale Prices",
              type: "area"
            },
            title: "Avg Sale Prices",
            format: {
              prefix: "$"
            }
          },
          {
            plot: {
              value: "Change in Avg Sale Prices",
              type: "column"
            },
            title: "+/- Avg Sale Prices"
          }
        ],
        data: dataStore.getDataTable()
      }
    }).render();
  });
  