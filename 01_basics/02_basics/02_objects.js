// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = { 
    name: "Gograj",
    "full name" : "Gograj Choudhary",
    [mySym]: "mykey1",
    age : 18,
    location : "jaipur",
    email : "Gograj@123",
    isLoggedIn : false,
    lastLoginDay: ["Monday","Saturday"]
}

console.log(Js.email);

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Gograj@4321" // ==> here email in object will chenged
Object.freeze(JsUser)
JsUser.email = "Gograj@11111"  // ==> here email in object will not  chenged becaused of frezz
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user")
}

JsUser.greetingTwo = function(){
    console.log("hello Js user, ${this.name}");
}

console.log(JsUser.greeting());
console.log(JsUser.greatingTwo());
