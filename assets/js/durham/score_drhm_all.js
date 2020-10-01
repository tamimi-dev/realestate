FusionCharts.ready(function() {
    var cpuGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container_score',
        id: 'market_score',
       width: '270',
        height: '490',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "theme": "candy",
            "bgColor":  "#303032" ,
            "caption": "Market score",
            "subcaption": "Based on the Month of Inventory",
            "lowerLimit": "9",
            "upperLimit": "0",
            "numberSuffix": " Mo",
            "chartBottomMargin": "20",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "editMode": "0",
            "reverseScale": "0"
          },
          "colorRange": {
            "color": [{
                "minValue": "9",
                "maxValue": "6",
                "label": "Low",
              },
              {
                "minValue": "6",
                "maxValue": "4",
                "label": "Moderate",
              },
              {
                "minValue": "3",
                "maxValue": "0",
                "label": "High",
              }
            ]
          },
          "pointers": {
            "pointer": [{
              "value": "2",
               "fillcolor": "#d67f29",
            }]
          },
         /* "trendPoints": {
            "point": [
              //Trendpoint
              {
                "startValue": "70",
                "displayValue": " ",
                "dashed": "1",
                "showValues": "0"
              },
              {
                "startValue": "85",
                "displayValue": " ",
                "dashed": "1",
                "showValues": "0"
              },
              //Trendzone
              {
                "startValue": "70",
                "endValue": "85",
                "displayValue": " ",
                "alpha": "40"
              }
            ]
          },*/
          "annotations": {
           "origw": "400",
           "origh": "190",
            "autoscale": "1",
            "groups": [{
              "id": "range",
              "items": [
                {
                  "id": "rangeText",
                  "type": "Text",
                  "fontSize": "11",
                  "fillcolor": "#303032",
                        //  "text": "ee",
                  "x": "$chartCenterX",
                  "y": "$chartEndY-25"
                }
              ]
            }]
          }
        }
      })
      .render();
  });
  