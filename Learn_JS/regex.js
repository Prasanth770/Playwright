



const pattern = /Order#\s*(\d+)/;
const text = 'Order#32678';
// let text = prompt("Enter Order String");

console.log(text.match(pattern)[1]);