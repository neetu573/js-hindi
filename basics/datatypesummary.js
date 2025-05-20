//Primitive
// ?types : String,Number,Boolean,null,undefined,Symbol,BigInt 

const score = 100
const scoreValue = 100.2
const isLoogedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);  //output false
const bigNumber = 2324411669861982n

//Reference (non primitive)
//array,object,functions

const heros = ['shaktiman',"naagraj", "doga"]

let myObj = {
    name:"neetu",
    age:23,
}

const myFunction = function(){
    console.log("hello world");
}

//console.log(typeof bigNumber);


//                     MEMORY

// stack(primitive), Heap(non-primitive)

let myYoutubeName ="hiteshchaudhary.com"
let anotherName = myYoutubeName
anotherName= "chaiaurcode"

//console.log(myYoutubeName);
//console.log(anotherName);

let userOne = {
    email : "user@ggogle.com",
    upi : "user@ybl",
};
let userTwo = userOne
userTwo.email = "neetu@google.com"

//console.log(userOne.email)
//console.log(userTwo.email)