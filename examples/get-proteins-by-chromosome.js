var NextProtClient = require("nextprot-api-cli");
//var NextProtClient = require("../lib/index.js"); //For development

//neXtProt is free to use but we appreciate some information about your application and who you are :)
var applicationName = "get-proteins-by-chromosome.js (node app that shows how to query neXtProt SPARQL endpoint)";
var clientInformation = "Calipho group at SIB";
var nx = new NextProtClient(applicationName, clientInformation);

var chromosome = process.argv[2] || 'Y';

console.log("Querying chromosome " + chromosome);

//Refer to http://snorql.nextprot.org for more example queries
var sparqlQuery = 'select distinct ?entry where { ?entry :gene / :chromosome "'+ chromosome +'"^^xsd:string}'

function getCSVRepresentation(results) {
	var csvResult = "";
	results.forEach(function (r) {
		csvResult += r.entry.value.replace("http://nextprot.org/rdf/entry/", "") + ","
	});
	return csvResult.substr(0, csvResult.length - 1);
};

nx.executeSPARQL(sparqlQuery, function(data) {
	console.log("Found " + data.results.bindings.length + " entries: ");
	console.log(getCSVRepresentation(data.results.bindings));
});
