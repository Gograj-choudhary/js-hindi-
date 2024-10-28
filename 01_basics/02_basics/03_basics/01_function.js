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
    console.log("Gograj") // ==> it will not be print because it exucatio
}