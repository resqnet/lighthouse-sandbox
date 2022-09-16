import * as fs from 'fs';

const result = fs.readdirSync('/Users/lighthouse-ci-action/.lighthouseci');
console.log(result);