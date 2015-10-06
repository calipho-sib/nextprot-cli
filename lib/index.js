var xhr = require('nets');


var apiBaseUrl = "https://api.nextprot.org/";
var sparqlEndpoint = apiBaseUrl + "sparql";
var sparqlFormat = "?output=json";

 var applicationName = null;
 var clientInfo = null;
        
var options =   {
   method: 'GET',
   headers: { "Accept": "application/json, text/javascript" }
};

function addParamToUrl(href, paramName, newVal) {
    var tmpRegex = new RegExp("(" + paramName + "=)[a-zA-Z0-9_]+", 'ig');
    if (href.match(tmpRegex) !== null) {
        return href.replace(tmpRegex, '$1' + newVal);
    }
    return href += (((href.indexOf("?") !== -1) ? "&" : "?") + paramName + "=" + newVal);
}
  
//Private members
var getJson = function(url, callback, errorCallback){

    var finalURL = url;
    finalURL = addParamToUrl(finalURL, "clientInfo", clientInfo);
    finalURL = addParamToUrl(finalURL, "applicationName", applicationName);

    options.url = finalURL;
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
var NextprotClient = function (appName, clientInformation) {
      applicationName = appName;
      clientInfo = clientInformation;
        if (!appName) {
            throw "Please provide some application name  ex:  new Nextprot.Client('demo application for visualizing peptides', clientInformation);";
        }
    
        if (!clientInformation) {
            throw "Please provide some client information ex:  new Nextprot.Client(applicationName, 'Calipho SIB at Geneva');";
        }
}

NextprotClient.prototype.getProteinBlock = function (entryName, block, callback, errorCallback) {
    var url = apiBaseUrl +  "entry/" + entryName + "/" + block;
    getJson(url, callback, errorCallback);
}

NextprotClient.prototype.executeSPARQL = function (sparql, callback, errocCallback) {
    
    if(sparqlPrefixes === ""){
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
    }else {
        
            var sparqlQuery = sparqlPrefixes + sparql; 
            var url = sparqlEndpoint + sparqlFormat + "&query=" + encodeURIComponent(sparqlQuery)
            getJson(url, callback, errocCallback);
    
    }


}

NextprotClient.getAPIUrl = function () {
    return apiBaseUrl;
}

module.exports = NextprotClient;