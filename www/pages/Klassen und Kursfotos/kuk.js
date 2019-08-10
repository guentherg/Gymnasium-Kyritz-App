$(document).ready(function(){
	$.get("https://api.myjson.com/bins/h2kps", function(data, status){
		for (var i = 0; i < data.length; i++) {
			var url = data[i].url;
			var klasse = data[i].klasse;
			$("#pics").append("<img width=100% src="+ url +"></img>");
			$("#pics").append('<b><div id="'+klasse+'">'+"&nbsp;&nbsp;"+klasse+'</div></b>');
			$("#"+klasse).click(function(){
				window.open(url, '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
				console.log(url)
			});
			$("#pics").append('<br>');
		}
	});
});
