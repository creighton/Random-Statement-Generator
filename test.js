var CRS = require('./rndstmts').CreateRandomStatements;
var URS = require('./rndstmts').UseRandomStatements;

var crs = new CRS(1, 3);
var urs = new URS((obj) => console.log(JSON.stringify(obj, null, 3)));
// rs.print

crs.pipe(urs);

