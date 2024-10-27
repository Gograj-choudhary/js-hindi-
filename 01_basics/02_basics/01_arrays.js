 // array

const myArr = [0,1,2,3,4,5]
const myHeros = ["jethalal", "tappu"]

const myArr2 = new Array(1,2,3,4)
// consol.log(myArr[0]) ==> it will print 0

// ==+ array method +==

// myArr.push(8)  ==> it will push 6 in last in myArr
// myArr.pop() ==> it will remove one element from last of myArr

// myArr.unshift(9) ==> it will add 9 in myArr in start of array 
// myArr.shift() ==> it will remove a element from starting of myArr

// console.log(myArr.includes(9)); ==> it will check wether there element 9 is in myArr ot not
// console.log(myArr.indexOf(3)); == gives index of element 3 in myArr

// const newArr =myArr.join() ==> it will convert arr in string 


console.log(myArr);

// slice and splice functions

//console.log("A", myArr);
const myn1 = myArr.slice(1,3) //==> it will remove elements of arr form index 1 to 3 but is not remove and also not change to origin arr 

//console.log(myn1);

console.log("b",myArr);
const myn2 = myArr.splice(1,3) // ==> here 3 also be removed and orignal arr also changed

//console.log(myn1);