var xhr = require('nets');


//Private members
var _callUrl = function(entryName, block, callback){
    xhr({
        url: "https://api.nextprot.org/entry/" + entryName + "/" + block + ".json",
        method: 'GET'
    } , function (err, resp, body) {
        callback(JSON.parse(body))
    })
}

//Class
var nextprotClient = function () {}

nextprotClient.getProteinBlock = function (entryName, block, callback) {
    _callUrl(entryName, block, callback);
}

module.exports = nextprotClient;