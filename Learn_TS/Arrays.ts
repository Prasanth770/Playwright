//Arrays
const names: Array<string> = ["test", "test1", "test4"];
console.log(names);
const scores: number[] = [21, 56, 76, 78, 43];
const mixed: (number | string)[] = ["test", 56, "trerr", 8789, 9898];
console.log(scores.map((a) => a * 2));
console.log(scores.filter((a) => a % 2 == 0));

//Maps
const citsPops = new Map<string, number>([
  ["Chittoor", 23_000_000],
  ["Chennai", 19_000_000],
  ["Madurai", 20_000_000],
  ["Delhi", 13_000_000],
  ["Benglru", 93_000_000],
]);
console.log(citsPops);
const credinitials = new Map<string, {email :string , password :string}>([
  ["admin", {email :"admin1", password :"admin123"}],
  ["user1", {email :"user1", password :"pwd123"}],
  
]);
console.log(citsPops);

