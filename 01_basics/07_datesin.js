// date 

let myDate = new Date()
console.loh(myDate.toString());
console.log(myDate.toDateString());
console.loh(myDate.toLocaleString());
console.loh(typeof myDate);

// let myCreatedDate = new Date(2024,0,25)
let myCreatedDate = new Date(2024,0,25, 5,2)
// let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStemp = Date.now()

console.log(myTimeStemp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('dafault',{
    weekday : "long",
    
})






