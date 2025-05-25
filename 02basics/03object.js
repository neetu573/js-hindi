//singleton
//Object.create

//object literals

const mySym = Symbol("key1")


const JsUser ={
    name: "neetu",
    "full name":"neetu kanwar",
    [mySym]: "mykey1",
    age: 23,
    location :"Mohali",
    email: "neetu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["age"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kanwar@google.com"   //value override
//Object.freeze(JsUser)     //freeze the values
JsUser.email = "rajut@google.com"
//console.log(JsUser)

JsUser.greeting = function() {
    console.log("hello js user");
}
JsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());    //output undefined when used without ()
console.log(JsUser.greetingTwo());