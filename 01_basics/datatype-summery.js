// primitive 
// 7 type : string , number, boolearn, null, undefind, symbol,BigInt

const score = 100 // it is a number
const scoreValue =  100.3 // it is a also number

const isLoggedIn = false
const Id = symbole('123') // it wil gives a uniqe value 
const anotherId = symbole('123')
// both Id and anotherId are not same they are different


// Reference (Non peimitive)

// 3 type : Array, objects, Function

const heros = ["jethalal", "beede","poptlal"];

// object

let obj = {
    name: "Gograj",
    age : 21,
}

const myFunction = function(){
    // console.log("Hello")
}


// ++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap(Non-Primitive)

let myName = "Gograj"
let anotherName = "Gograj Choudhary"

anotherName = "Choudhary"

// console.log(myName) == Gograj
// console.log(anotherName) == Choudhary

// because in stack only copy of orignal vale is pass and any changese are done only with copy not original value 

// now Heap

let user1 = {
    name : "Gograj"
    EmailId : "Gograj222@gmail.com"
}

let user2 = {
    name : "Gograj choudhary"
    EmailId : "Gograj111@gmail.com"
}

// console.log(user1.EmailId) and  console.log(user2.EmailId) will bacome same of user2 EmailId because here value pass by refrence not as copy so if you changes somthing then that will change in orignal value