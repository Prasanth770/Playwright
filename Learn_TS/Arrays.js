//Arrays
var names = ["test", "test1", "test4"];
console.log(names);
var scores = [21, 56, 76, 78, 43];
var mixed = ["test", 56, "trerr", 8789, 9898];
console.log(scores.map(function (a) { return a * 2; }));
console.log(scores.filter(function (a) { return a % 2 == 0; }));
