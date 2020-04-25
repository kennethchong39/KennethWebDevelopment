const fs = require('fs');
const supervillains = require('supervillains');
const superhero = require('superheroes');

var mySuperheroName = superhero.random();

console.log(mySuperheroName);

var mySupervillains = supervillains.random();

console.log(mySupervillains)
