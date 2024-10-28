// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "Gograj@gamil.com",
    fullname: {
        userfullname:{
        firstname: "Gograj",
        lastname: "choudhary"
    }
 }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1 , obj2}
//const obj3 = object.assign({},obj2,obj2,obj4) // ==> this also a way to merging objects 

const obj3 = {...obj1, ...obj2,...obj4} // ==> this the best way of merging objects 
console.log(obj3);

const users = [
    {
        id: 1,
        email: "gograj.com"
    },
    {
         id: 2,
        email: "gograj23.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(object.keys(tinderUser));
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOweProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hithesh"
}

// course.courseIntructor

const {courseInstructor  : Instructor} = course

console.log(courseInstructor);

// *** this is how json looks *****

// {
//     "name": "Gograj",
//     "price": "free",
//     "coursename": "js in hindi"
// }

[
    {},
    {},
    {}
]