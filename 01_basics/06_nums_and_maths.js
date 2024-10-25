 const score = 400
 console.log(score);

 const  balance = new Number(100)
 console.log(balance);

 console.log(balance.toString().length);
 console.log(balance.toFixed(2)); // it shows how many desimal number will be balance 


const otherNumber = 123.2323
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // it will convert to hundereds into indian paattern

// ******************* maths****************

console.log(Math); // it will gives all maths functions 
console.log(Math.abs(-4)); // it will gives 4
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.min(2,4,3,6)); // 2
console.log(Math.max(2.3,4554,56,)); // 4554


console.log(Math.random()); // it will gives random value between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1)+min));



