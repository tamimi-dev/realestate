$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ooebdkx/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var update = data.feed.entry[i]['gsx$update']['$t'];
 
        
	      document.getElementById('update').innerHTML += (update);
        
           }
    });
