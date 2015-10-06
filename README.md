# nextprot-cli

[![NPM version](http://img.shields.io/npm/v/biojs-rest-nextprot.svg)](https://www.npmjs.org/package/biojs-rest-nextprot) 

> Javascript library for the neXtProt API (https://api.nextprot.org). neXtProt contains a comprehensive set of human proteins knwoledge.

## Getting Started
Install the module with: 
```shell
npm install nextprot-api-cli
```

Import the module in your code and provide some information about your application:
```javascript
var NextProtClient = require("nextprot-api-cli");

//neXtProt is free to use but we appreciate some information about your application and who you are :)
var applicationName = "get-proteins-sequence.js (node app that shows how to query the neXtProt API)";
var clientInformation = "Calipho group at SIB";
var nx = new NextProtClient(applicationName, clientInformation);
```

Once you have initialized the object you can either request the API directly in the following manner:
```javascript
//Refer to http://snorql.nextprot.org for more example queries
nx.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});

//Will print out the sequence of the protein P01308 (insulin)
MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN
```



Or run a SPARQL query agains the neXtProt SPARQL endpoint. See https://snorql.nextprot.org for more examples
```javascript

var chromosome = 13;
var sparqlQuery = 'select distinct ?entry where { ?entry :gene / :chromosome "'+ chromosome +'"^^xsd:string}'

nx.executeSPARQL(sparqlQuery, function(data) {
	console.log("Found " + data.results.bindings.length + " entries: ");
});

```

You can even combine both...

Look at the examples folder for working code.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/calipho-sib/biojs-rest-nextprot/issues).

## License 
This software is licensed under the GNU GPL v2 license, quoted below.

Copyright (c) 2015, SIB Swiss Institute of Bioinformatics
