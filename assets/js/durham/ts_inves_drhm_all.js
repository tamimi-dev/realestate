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
      .then(function(data_inv_all) {
        return data_inv_all;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema_inv_all = [{
      "name": "Time",
      "type": "date",
      "format": "%-d/%-m/%Y" // NEW fixed format
    }, {
      "name": "Percent of Investors Durham",
      "type": "number"
    }, {
      "name": "Percent of Investors Oshawa",
      "type": "number"
    }];
  
  
  var data_inv_all, dataStore_inv_all;
  
  
  function formatJSON_inv_all(entries) {
      var formattedJSON_inv_all = [];
    entries.forEach(item => formattedJSON_inv_all.push([item.gsx$date.$t, parseFloat(item.gsx$percentinvestorsalldrhm.$t), parseFloat(item.gsx$percentinvestorsallosh.$t)]));
    return formattedJSON_inv_all; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/om4gaa5/public/values?alt=json"
    )
  ]).then(function(res) {
    data_inv_all = formatJSON_inv_all(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore_inv_all = new FusionCharts.DataStore(data_inv_all, schema_inv_all);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "chart-container_inv_all",
      id: "inv_all",
      width: "100%",
      height: "100%",

      dataSource: {
        chart: {
          multiCanvas: false,
          canvasHeightProportion: "1:1",
          "theme": "candy",

          paletteColors: "#F0DC46, #E1D7AD, #6EC85A, #6E80CA, #E09653, #36B5D8, #F066AC, #61C8C8, #EBE4F4, #E64141",
          style: {
  
            background: {
                fill: "#303032"
            },
            canvas: {
                fill: "#353438",
                stroke: "#4B4B4B",
                "stroke-width": .5
            }
        }


        },
        caption: {
          text: "Percent of Investors"
        },
        subcaption: {
          text: "Percent of Investors on Durham vs Oshawa"
        },
        yAxis: [
          {
            plot: {
              value: "Percent of Investors",
              type: "bar"
            },
            title: "Percent of Investors ",
            format: {
              prefix: "%"
            }
          },

        ],
        data: dataStore_inv_all.getDataTable()
      }
    }).render();
  });
  