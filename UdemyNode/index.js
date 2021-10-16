//REPL
// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");

const superheroes = require('superheroes');
superheroes.all;
var heroesname = superheroes.random();
console.log(heroesname);

const supervillains = require('supervillains');
supervillains.all;
var villainname = supervillains.random();
console.log(villainname);
