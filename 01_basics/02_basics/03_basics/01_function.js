// console.log("G");
// console.log("o");
// console.log("G");
// console.log("r");
// console.log("a");
// console.log("j"); == this is simple way of printing without function

// by function

function sayMyName(){
    console.log("G");
    console.log("o");
    console.log("G");
    console.log("r");
    console.log("a");
    console.log("j");

}
// sayMyName() here it calling function

function addTwoNumber(num1 , num2){
    console.log(num1+num2);
}

addTwoNumber(3,4); //==> it will gives 7
addTwoNumber(3,"a"); //==> it will gives 3a
addTwoNumber(3,null); //==> it will gives 3


function addTwoNumber(num1 , num2){
    let result = num1 + num2
    return result 
    // console.log("Gograj") // ==> it will not be print because it exucation after return

}
const result = addTwoNumber(2,4)
console.log("result:", result);

function loginUserMessage(username){
    if(username === undefined){ // also use like if(!username)
        console.log("pleas eenter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())


// *******  functions *********//

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000)) // it willl give a array of num1s

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000)) // it will gives array of num1 but only 500 and 2000

const user = {
    username: "hitesh",
    price: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
