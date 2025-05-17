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

console.log(typeof bigNumber);