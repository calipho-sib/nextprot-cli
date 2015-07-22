var xhr = require('nets');


var _APIURL = "https://api.nextprot.org/";

//Private members
var _callUrl = function(entryName, block, callback, errorCallback){
    var url = _APIURL +  "entry/" + entryName + "/" + block + ".json";
    console.log(url);

    xhr({
        url: url,
        method: 'GET'
    } , function (err, resp, body) {
        if(err){
            console.log('ERR', err, errorCallback);
    	    errorCallback(err);
        }else {
            callback(JSON.parse(body));
        }
    })
}

//Class
var nextprotClient = function () {}

nextprotClient.getProteinBlock = function (entryName, block, callback, ec) {
    _callUrl(entryName, block, callback, ec);
}


nextprotClient.getAPIUrl = function () {
    return _APIURL;
}

module.exports = nextprotClient;