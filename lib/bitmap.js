'use strict';

//Your solution should be composed of small tested modules that solve specific problems.
//Your modules should be thoughfuly named and well documented.

const fs = require('fs');
const bmp = module.exports = {};

//Read File
const bmp.readFile = fs.readFileSync(`${__dirname}/assets/bitmap.bmp`);

//Write File
const bmp.writeFile = function(path, data) {
  fs.writeFileSync(path, data);
};
