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
      .then(function(data_pred_all) {
        return data_pred_all;
      })
      .catch(function(err) {
        console.log("Something went wrong! Please check data/schema files");
      });
  }
  
    var schema_pred_all = [{
      "name": "Time",
      "type": "date",
      "format": "%-d/%-m/%Y" // NEW fixed format
    }, {
      "name": "Change in Avg Sale Prices",
      "type": "number"
    }];
  
  
  var data_pred_all, dataStore_pred_all;
  
  
  function formatJSON_pred_all(entries) {
      var formattedJSON_pred_all = [];
    entries.forEach(item => formattedJSON_pred_all.push([item.gsx$date.$t, parseFloat(item.gsx$avgpredsalepricesalldrhm.$t)]));
    return formattedJSON_pred_all; // NEW return values
  };
  
  Promise.all([
    loadData(
      "https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/okydvfm/public/values?alt=json"
    )
  ]).then(function(res) {
    data_pred_all = formatJSON_pred_all(res[0].feed.entry); // NEW added function to format incoming JSON
  
    dataStore_pred_all = new FusionCharts.DataStore(data_pred_all, schema_pred_all);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "chart-container_pred_all",
      id: "pred_avg_sale_all",
      width: "100%",
      height: "100%",
      dataSource: {
        chart: {
          multiCanvas: false,
          canvasHeightProportion: "1:1",
          "theme": "candy",
          style: {
            paletteColors: "#F0DC46, #6EC85A, #F066AC, #6E80CA, #E09653, #36B5D8, #E1D7AD, #61C8C8, #EBE4F4, #E64141",
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
          text: "Predicted Average Sale Price"
        },
        subcaption: {
          text: "The average of the sales price and the future Prediction (represented in dashed), Model Equation: ŷ = 85.4003X-3122963.63646 (SSX=420879355.1818, SP=35943221441.2386, SP/SSX=85.4003, MY-bMX= -3122963.63646)"
        },
        yAxis: [
          {
            plot: ["Percent of Investors Durham"],
            title: "Average Sale with prediction",
            format: {
              prefix: "$"
            }
          }
        ],
        xaxis: {
            timemarker: [
                {
                  start: "1/10/2020",
                  label: "Based on a predective model: ŷ = 85.4003X-3122963.63646 {br} (SSX=420879355.1818, SP=35943221441.2386, SP/SSX=85.4003, MY-bMX= -3122963.63646)",
                  timeformat: "%-d/%-m/%Y",
                  style: {
                    marker: {
                      fill: "#FBEFCC"
                    }
                  }
                }
            ]

        },
        extensions: {
            prediction: {
              style: {
                plot: "line"
              }
            }
          },

        data: dataStore_pred_all.getDataTable()
      }
    }).render();
  });





