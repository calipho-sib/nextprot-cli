var NextProtClient = require("nextprot-api-cli");
//var NextProtClient = require("../lib/index.js"); //For development

//neXtProt is free to use but we appreciate some information about your application and who you are :)
var applicationName = "get-proteins-sequence.js (node app that shows how to query the neXtProt API)";
var clientInformation = "Calipho group at SIB";
var nx = new NextProtClient(applicationName, clientInformation);

//Refer to https://api.nextprot.org to see a complete list of entry "blocks" you can request
nx.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});
