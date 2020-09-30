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
      .then(function(data_dom) {
        return data_dom;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema_dom = [{
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
  
  
  var data_dom, dataStore_dom;
  
  
  function formatJSON_dom(entries) {
      var formattedJSON_dom = [];
    entries.forEach(item => formattedJSON_dom.push([item.gsx$date.$t, parseFloat(item.gsx$avgdomalldrhm.$t), parseFloat(item.gsx$avgdomallosh.$t)]));
    return formattedJSON_dom; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/om4gaa5/public/values?alt=json"
    )
  ]).then(function(res) {
    data_dom = formatJSON_dom(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore_dom = new FusionCharts.DataStore(data_dom, schema_dom);
  
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
        data: dataStore_dom.getDataTable()
      }
    }).render();
  });
  