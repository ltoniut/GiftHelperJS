function getJson(yourUrl){
    console.log(yourUrl);
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);

    return JSON.parse(Httpreq.responseText);
}

exports.getJson = getJson;
