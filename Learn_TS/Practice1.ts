let text:string ="#%This*&is&#*(My294First(&TCS638Interview";
let arr : string[] = text.replaceAll(/[^a-zA-Z]/g, " ").trim().split(/\s+/);
console.log(arr[1]);