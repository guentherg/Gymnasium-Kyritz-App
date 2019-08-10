var url="http://gymnasium-kyritz.de/wordpress/wp-json/wp/v2/pages/1925";
var vp;

function setup(){
    noCanvas();
    document.write('<a href="index.html"><img src="https://png.icons8.com/metro/540/circled-left-2.png" width="50" height="50"></a>');
    loadJSON(url, gotData);
}

function gotData(data){
    //Termine laden und anzeigen->verstecken
    vp = data.content.rendered;
    document.write(vp);
    //Die gesamte Terminliste speichern
    var all = select(".event-list");

    //Termine verschiedener Kategorien laden und speichern
    var ferien_termine_container = selectAll(".ferien");
    var klausuren_termine_container = selectAll(".klausuren");
    var prf_termine_container = selectAll(".prf");
    var events_termine_container = selectAll(".events");

    //Anfangs geladene Termine entfernen um neue zu schreiben
    all.remove();

    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
    //FERIENTERMINE
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

    //temporäre Elemente Elemente erzeugen um auf die Daten zuzugreifen
    var ferienholder = []
    for(var i = 0; i < ferien_termine_container.length; i++){
      ferienholder.push(createElement("div", ferien_termine_container[i].html()));
    }

    //Anfangsdaten, Enddaten und Titel bekommen
    var ferien_startdates = selectAll(".startdate");
    var ferien_enddates = selectAll(".enddate");
    var ferien_titles = selectAll(".event-title");



    //Variable zum halten der Ferien-Termin-Objekte
    var ferien_termine = [];
    //iteriere über alle ferien_titles/ferien_startdates/ferien_enddates
    //verwandle diese in ein verarbeitbares objekt
    for (var i = 0; i < ferien_titles.length; i++) {
      if(ferien_startdates.length == 0 || ferien_startdates.length == 1){
        var klausuren_object = {startdate: "no startdate",
                                enddate:   klausuren_enddates[i].elt.innerText,
                                title:     klausuren_titles[i].elt.innerText
                               };
      }else{
        var ferien_object = {startdate: ferien_startdates[i].elt.innerText,
                             enddate:   ferien_enddates[i].elt.innerText,
                             title:     ferien_titles[i].elt.innerText,
                            };
        ferien_termine.push(ferien_object);
      }
    }
    //temporäre elemente entfernen
    var ferienholder = selectAll("div");
    for (var i = 0; i < ferienholder.length; i++) {
      ferienholder[i].remove();
    }
    console.log("Ferien", ferien_termine);
    createElement("h1", "Ferien erfolgreich geladen");



    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
    //KLAUSURENTERMINE kein startdate
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

    //temporäre Elemente Elemente erzeugen um auf die Daten zuzugreifen
    var klausurenholder = [];
    //iteriere über alle ferien_titles/ferien_startdates/ferien_enddates
    //verwandle diese in ein verarbeitbares objekt
    for (var i = 0; i < klausuren_termine_container.length; i++) {
      klausurenholder.push(createElement("div", klausuren_termine_container[i].html()));
    }

    //Anfangsdaten, Enddaten und Titel bekommen
    var klausuren_startdates = selectAll(".startdate");
    var klausuren_enddates = selectAll(".enddate");
    var klausuren_titles = selectAll(".event-title");

    //Variable zum halten der Ferien-Termin-Objekte
    var klausuren_termine = [];
    for (var i = 0; i < klausuren_titles.length; i++) {
      if(klausuren_startdates.length == 0 || kla_startdates.length == 1){
        var klausuren_object = {startdate: "no startdate",
                                enddate:   klausuren_enddates[i].elt.innerText,
                                title:     klausuren_titles[i].elt.innerText
                               };
      }else{
        var klausuren_object = {startdate: klausuren_startdates[i].elt.innerText,
                                enddate:   klausuren_enddates[i].elt.innerText,
                                title:     klausuren_titles[i].elt.innerText
                               };
      }
      klausuren_termine.push(klausuren_object);
    }
    //temporäre elemente entfernen
    var klausurenholder = selectAll("div");
    for (var i = 0; i < klausurenholder.length; i++) {
      klausurenholder[i].remove();
    }
    console.log("Klausuren", klausuren_termine);
    createElement("h1", "Klausuren erfolgreich geladen");



    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
    //PRFTERMINE kein startdate
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

    var prfholder = [];
    for (var i = 0; i < prf_termine_container.length; i++) {
      prfholder.push(createElement("div", prf_termine_container[i].html()));
    }

    var prf_startdates = selectAll(".startdate");
    var prf_enddates = selectAll(".enddate");
    var prf_titles = selectAll(".event-title");

    var prf_termine = [];
    for (var i = 0; i < prf_titles.length; i++) {
      if(prf_startdates.length == 0 || prf_startdates.length == 1){
        var prf_object = {startdate: "no startdate",
                          enddate:   prf_enddates[i].elt.innerText,
                          title:     prf_titles[i].elt.innerText
                               };
      }else{
        var prf_object = {startdate: prf_startdates[i].elt.innerText,
                          enddate:   prf_enddates[i].elt.innerText,
                          title:     prf_titles[i].elt.innerText
                               };
      }
      prf_termine.push(prf_object);
    }

    var prfholder = selectAll("div");
    for (var i = 0; i < prfholder.length; i++) {
      prfholder[i].remove();
    }
    console.log("Prüfungen", prf_termine);
    createElement("h1", "Prüfungen erfolgreich geladen");



    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
    //EVENTSTERMINE kein startdate
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

    var eventsholder = [];
    for (var i = 0; i < events_termine_container.length; i++) {
      eventsholder.push(createElement("div", events_termine_container[i].html()));
    }

    var events_startdates = selectAll(".startdate");
    var events_enddates = selectAll(".enddate");
    var events_titles = selectAll(".event-title");

    var events_termine = [];
    for (var i = 0; i < events_titles.length; i++) {
      if(events_startdates.length == 0 || events_startdates.length == 1){
        var events_object = {startdate: "no startdate",
                             enddate:   events_enddates[i].elt.innerText,
                             title:     events_titles[i].elt.innerText
                               };
      }else{
        var events_object = {startdate: events_startdates[i].elt.innerText,
                             enddate:   events_enddates[i].elt.innerText,
                             title:     events_titles[i].elt.innerText
                               };
      }
      events_termine.push(events_object);
    }
    var eventsholder = selectAll("div");
    for(var i = 0; i < eventsholder.length; i++){
      eventsholder[i].remove();
    }
    console.log("Events", events_termine);
    createElement("h1", "Events erfolgreich geladen");

    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
    //                TERMINLAYOUT ERSTELLEN                 \\
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

    var testElements = selectAll("h1");
    for (var i = 0; i < testElements.length; i++) {
      testElements[i].remove();
    }

    createElement("h1", "Ferien");
    var ferien_event_table = createElement("table", "");
    ferien_event_table.style("border", 1);
    ferien_event_table.style("width", "100%");
    for(var i = 0; i < ferien_termine.length; i++){
      var row = createElement("tr", "");
      var temprow = createElement("td", ferien_termine[i].startdate + "-" + ferien_termine[i].enddate);
      temprow.style("width", "40%");
      row.child(temprow);
      var temprow = createElement("td", ferien_termine[i].title)
      row.child(temprow);
      row.parent(ferien_event_table);
    }




    createElement("h1", "Klausuren");
    var klausuren_event_table = createElement("table", "");
    klausuren_event_table.style("width", "100%");
    for(var i = 0; i < klausuren_termine.length; i++){
      var row = createElement("tr", "");
      var temprow = createElement("td", klausuren_termine[i].enddate);
      temprow.style("width", "40%");
      row.child(temprow);
      var temprow = createElement("td", klausuren_termine[i].title)
      row.child(temprow);
      row.parent(klausuren_event_table);
    }

    createElement("h1", "Prüfungen");
    var prf_event_table = createElement("table", "");
    prf_event_table.style("width", "100%");
    for(var i = 0; i < prf_termine.length; i++){
      var row = createElement("tr", "");
      var temprow = createElement("td", prf_termine[i].enddate);
      temprow.style("width", "40%");
      row.child(temprow);
      var temprow = createElement("td", prf_termine[i].title)
      row.child(temprow);
      row.parent(prf_event_table);
    }

    createElement("h1", "Events");
    var events_event_table = createElement("table", "");
    events_event_table.style("width", "100%");
    for(var i = 0; i < events_termine.length; i++){
      var row = createElement("tr", "");
      var temprow = createElement("td", events_termine[i].enddate);
      temprow.style("width", "40%");
      row.child(temprow);
      var temprow = createElement("td", events_termine[i].title)
      row.child(temprow);
      row.parent(events_event_table);
    }
}