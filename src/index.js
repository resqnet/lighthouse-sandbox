import * as fs from 'fs';

const result = fs.readdirSync('./.lighthouseci');
console.log(result);