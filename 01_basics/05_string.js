const name = "Gograj"
const repoCount = 20

// console.log(name + repoCount + "  value") this is a old way to pring or ad two strings 


// ==> new way of add two string or print
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 
// in mordern way we use `` this comas for printing strins and $ sign 

const gameName = new String('gograj')

// console.log(gameName[0]) ==> it will print 'g'
// console.log(gameName.__proto__); ==> it will gives all prototypes of string


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); ==> change to string elemnts to uppercase 
// console.log(gameName.charAt(2)); ==> it will gives element of givent index

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  gograj  "
// console.log(newStringOne);
// console.log(newStringOne.trim()); ==> it will remove all spaces from a string 


const url = "https://Gograj.com/gograj%20choudhary"

// console.log(url.replace(`%20`,'-')) ==> here %20 wil replaced by - 
// console.log(url.includes('sundar'))


const gameName1 = new String(Gograj-cho-udhary) 
// console.log(gameName1.split('-')); ==> here it will splite string by - 

