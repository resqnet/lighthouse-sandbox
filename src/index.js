var fs = require('fs');
var files = fs.readdireSync('/Users/lighthouse-ci-action/.lighthouseci');
console.log(files);