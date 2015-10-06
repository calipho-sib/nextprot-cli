var xhr = require('nets');


var apiBaseUrl = "https://api.nextprot.org/";
var sparqlEndpoint = apiBaseUrl + "sparql";
var sparqlFormat = "?output=json";

var clientInfo = "";
var applicationName = "";

var options =   {
   method: 'GET',
   headers: { "Accept": "application/json, text/javascript" }
};
  
//Private members
var getJson = function(url, callback, errorCallback){

    console.log("Calling " + url);
    options.url = url;
    xhr(options , function (err, resp, body) {
        if(err){
            console.log('ERR', err, errorCallback);
    	    errorCallback(err);
        }else {
            callback(JSON.parse(body));
        }
    })
}

var sparqlPrefixes = "";

//nextprot client class
var NextprotClient = function () {
}

NextprotClient.prototype.getProteinBlock = function (entryName, block, callback, errorCallback) {
    var url = apiBaseUrl +  "entry/" + entryName + "/" + block;
    getJson(url, callback, errorCallback);
}

NextprotClient.prototype.executeSPARQL = function (sparql, callback, errocCallback) {
    
    getJson(apiBaseUrl + "sparql-prefixes", 
        function (result) { 
            result.map(function (p) { 
                sparqlPrefixes += (p + "\n");  
                });
                
                var sparqlQuery = sparqlPrefixes + sparql; 
                var url = sparqlEndpoint + sparqlFormat + "&query=" + encodeURIComponent(sparqlQuery)
                getJson(url, callback, errocCallback);

        }
    );

}

NextprotClient.getAPIUrl = function () {
    return apiBaseUrl;
}

module.exports = new NextprotClient();