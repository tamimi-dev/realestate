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
      .then(function(data_moi_all) {
        return data_moi_all;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema_moi_all = [{
      "name": "Time",
      "type": "date",
      "format": "%-d/%-m/%Y" // NEW fixed format
    }, {
      "name": "Months of Inventory Durham",
      "type": "number"
    }, {
      "name": "Months of Inventory Oshawa",
      "type": "number"
    }];
  
  
  var data_moi_all, dataStore_moi_all;
  
  
  function formatJSON_moi_all(entries) {
      var formattedJSON_moi_all = [];
    entries.forEach(item => formattedJSON_moi_all.push([item.gsx$date.$t, parseFloat(item.gsx$monthsofinventoryalldrhm.$t), parseFloat(item.gsx$monthsofinventoryallosh.$t)]));
    return formattedJSON_moi_all; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/om4gaa5/public/values?alt=json"
    )
  ]).then(function(res) {
    data_moi_all = formatJSON_moi_all(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore_moi_all = new FusionCharts.DataStore(data_moi_all, schema_moi_all);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "chart-container_moi_all",
      id: "moi_all",
      width: "100%",
      height: "100%",

      dataSource: {
        chart: {
          multiCanvas: false,
          canvasHeightProportion: "1:1",
          "theme": "candy",

          paletteColors: "#36B5D8, #F066AC, #6EC85A, #6E80CA, #E09653, #F0DC46, #E1D7AD, #61C8C8, #EBE4F4, #E64141",
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
          text: "Months of Inventory"
        },
        subcaption: {
          text: "Months of Inventory on Durham vs Oshawa"
        },
        yAxis: [
          {
            plot: {
              value: "Months of Inventory",
              type: "line"
            },
            title: "Months of Inventory ",
            format: {
              prefix: "Months"
            }
          },

        ],
        data: dataStore_moi_all.getDataTable()
      }
    }).render();
  });
  