var NextProtClient = require("nextprot-cli");
//var NextProtClient = require("../lib/index.js"); //For development

//neXtProt is free to use but we appreciate some information about your application and who you are :)
var applicationName = "get-tissues-for-entry.js (node app that shows how to mix API with SPARQL requests)";
var clientInformation = "Calipho group at SIB";
var nx = new NextProtClient(applicationName, clientInformation);

var entry = process.argv[2] || 'NX_Q13562';

var queryForCellularComponents = 'select distinct ?location ?label where { ' +
  				  	   'values ?entry { entry:'+ entry +' } ' +
				       '?entry :isoform /:cellularComponent /:term /:childOf ?location. ' +
				       'optional {?location rdfs:label ?label} ' +
				       '}order by ?label';


//Combining API with SPARQL queries

//Gets overview of the API (https://api.nextprot.org) to obtain the name of the protein accession 
nx.getProteinBlock(entry, "overview", function (res){
	var overview = res.entry.overview;
	console.log("Querying cellular components for " + overview.mainProteinName + " (" + overview.mainGeneName + ")" + " [" +  entry + "]: \n");

	//Retrieves the locations for this entry 
	nx.executeSPARQL(queryForCellularComponents, function(data) {
		data.results.bindings.forEach(function(r) {
			console.log(r.label.value);	
		});
	});
})

