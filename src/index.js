import * as fs from 'fs';
import * as path from 'path';
import {parse, toJson} from './parser.js';

const resultDirPath = ".lighthouse";

const resultJsons = fs.readdirSync('./' + resultDirPath, {withFileTypes: true})
    .filter(dirent => dirent.isFile())
    .map(({name})=> name)
    .filter(file => path.extname(file).toLowerCase() === ".json");

resultJsons.forEach(file => {
    const data = parse(toJson(file));
    console.log(data);
});