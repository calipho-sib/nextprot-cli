# biojs-rest-nextprot

[![NPM version](http://img.shields.io/npm/v/biojs-rest-nextprot.svg)](https://www.npmjs.org/package/biojs-rest-nextprot) 

> Client library that interfaces the neXtProt REST API which contains a comprehensive set of human proteins

## Getting Started
Install the module with: `npm install biojs-rest-nextprot`

```javascript

var nextprot = require("biojs-rest-nextprot");

nextprot.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});
```

## Documentation

#### .getProteinBlock(entryName, block, callback)

**Parameter**: `entryName`
**Type**: `String`
**Example**: `NX_P01308` corresponds to insulin (NX_P01308) 

**Parameter**: `block`
**Type**: `String`
**Example**: `overview`, `isoform`, ...   //A full of different blocks can be seen in https://api.nextprot.org under Entry 

**Parameter**: `callback`
**Type**: `Function`

The 'getProteinBlock' method is responsible for requesting the nextprot api for the given protein.

How to use this method

```javascript
var nextprot = require("biojs-rest-nextprot");

nextprot.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});

//Will print out the sequence of the protein P01308 (insulin)
MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN

```

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/calipho-sib/biojs-rest-nextprot/issues).

## License 
This software is licensed under the GNU GPL v2 license, quoted below.

Copyright (c) 2015, SIB Swiss Institute of Bioinformatics
