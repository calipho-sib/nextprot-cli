# neXtProt - The knowledge resource on human proteins

This is a code repository for the SIB - Swiss Institute of Bioinformatics CALIPHO group neXtProt project

See: http://www.nextprot.org/

# neXtProt javascript client


[![NPM version](http://img.shields.io/npm/v/nextprot-cli.svg)](https://www.npmjs.org/package/nextprot-cli) 

Javascript client for neXtProt

This module contains methods to access the neXtProt API (https://api.nextprot.org) as well as the SPARQL endpoint (http://snorql.nextprot.org). 


## Getting Started
Install the module with: 
```shell
npm install nextprot-cli
```

Create a file, for example test-nextprot.js and write some javascript code:
Import the module in your code and provide some information about your application:
```javascript
var NextProtClient = require("nextprot-cli");

//neXtProt is free to use but we appreciate some information about your application and who you are :)
var applicationName = "my test application";
var clientInformation = "Student at UNIGE";
var nx = new NextProtClient(applicationName, clientInformation);
```

Once you have initialized the object you can either request the API directly in the following manner:
```javascript
//Refer to API (https://api.nextprot.org) to get an extensive list of possible protein blocks
nx.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});

//node test-nextprot.js
//Will print out the sequence of the protein P01308 (insulin)
MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN
```

Or run a SPARQL query against the neXtProt SPARQL endpoint. See https://snorql.nextprot.org for more examples
```javascript

var chromosome = 13;
//Refer to http://snorql.nextprot.org for more example queries
var sparqlQuery = 'select distinct ?entry where { ?entry :gene / :chromosome "'+ chromosome +'"^^xsd:string}'

nx.executeSPARQL(sparqlQuery, function(data) {
	console.log("Found " + data.results.bindings.length + " entries ");
});

//node test-nextprot.js
//Will print the number of entries that have a gene on chromosome 13
Found 328 entries
```

You can even combine both (API and SPARQL), look at the [examples](examples) folder for working code.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/calipho-sib/nextprot-cli/issues).

## License 
This software is licensed under the GNU GPL v2 license, quoted below.

Copyright (c) 2015, SIB Swiss Institute of Bioinformatics
