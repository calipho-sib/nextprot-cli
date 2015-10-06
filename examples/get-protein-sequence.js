var nx = require("../lib/index.js");

nx.getProteinBlock('NX_P01308', 'isoform', function (data) {
    data.entry.isoforms.map(function (i) {
        console.log(i.sequence)
    })
});
