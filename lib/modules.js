'use strict';

//Your solution should be composed of small tested modules that solve specific problems.
//Your modules should be thoughfuly named and well documented.

const fs = require('fs');
const bmp = require('/bitmap.js');

//Read File
const bitmap = fs.readFileSync(`${__dirname}/assets/bitmap.bmp`);


//tells the type of bitmap
console.log(bitmap.toString('ascii', 0, 2));

// fs.readFile(input, (err, data) => {
//   if (err) return err;
//   console.log();
// });

function fakeFunction() {
  var fakeArray = [1, 2, 3, 4, 5, 6];
  return fakeArray.slice(0, 3);

}

//Write

//Transform
