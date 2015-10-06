var nx = require("../lib/index.js");

var sparqlQuery = 'select distinct ?entry where { ?entry :gene / :chromosome "13"^^xsd:string}'

nx.executeSPARQL(sparqlQuery, function(data) {
	var result = data.results.bindings;
	console.log("Found " + result.length + " entries");
	/*result.forEach(function (e){
		console.log(e.entry.value);
	}
	)*/
});
