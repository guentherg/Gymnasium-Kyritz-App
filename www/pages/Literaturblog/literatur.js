// Changes XML to JSON
function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}

var xml;
$(document).ready(function(){
  $.ajax({
    type: "GET",
    headers: {"X-My-Custom-Header": "some value"},
    url: "http://gymnasium-kyritz.de/artblog/feed/"
  }).done(function (data) {
     //console.log(xml2json(data));
     xml = xml2json(data);
	   //document.body.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(xml2json(data), undefined, 4);
     addContent();
  });

});

function addContent() {
  console.log(xml.rss.channel.item);

  var articles = xml.rss.channel.item;

  for (var i = 0; i < articles.length; i++) {
    $("#content").append("<button id='button"+i+"'>"+articles[i].title+"</button>");
    $("#content").append("<div id='div"+i+"'></div>");
    $("#div"+i).append(articles[i]["content:encoded"]+"<br><br><br>");
    $("#div"+i).hide();
  }
  for(var i = 0; i < articles.length; i++){
    $("#button"+i).click(function(event) {
      var trigger = event.target.id;
      var trigger = trigger.replace("button", "");
      var trigger = parseInt(trigger, 10);
      if($("#div"+trigger).is(":visible")){
        $("#div"+trigger).hide();
      }else{
        $("#div"+trigger).show();
      }
    });
  }
}
