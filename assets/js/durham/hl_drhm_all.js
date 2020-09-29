$.getJSON("https://spreadsheets.google.com/feeds/list/1ghkpKiuX7ZdANRb6YhDLt9SgdkrAsxgA_YsMYsker9c/ooebdkx/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

       
		var avg_sale_price_drhm = data.feed.entry[i]['gsx$avgsaledrhmhl']['$t'];
var chng_price_drhm = data.feed.entry[i]['gsx$chngpricedrhmhl']['$t'];
     var chng_sale_drhm = data.feed.entry[i]['gsx$chngsaledrhmallhl']['$t'];
	      var moi_drhm = data.feed.entry[i]['gsx$moidrhmallhl']['$t'];



     
		document.getElementById('avg_sale_price_drhm').innerHTML += ('<tr>'+'<td>'+avg_sale_price_drhm+'</td>'+'</tr>');
		document.getElementById('chng_price_drhm').innerHTML += ('<tr>'+'<td>'+chng_price_drhm+'</td>'+'</tr>');
	      document.getElementById('chng_sale_drhm').innerHTML += ('<tr>'+'<td>'+chng_sale_drhm+'</td>'+'</tr>');
	      document.getElementById('moi_drhm').innerHTML += ('<tr>'+'<td>'+moi_drhm+'</td>'+'</tr>');
    	
      }
    });
