//const tinderUser = new Object()    //sigelton object
const tinderUser = {}                //non-sibgelton object 

tinderUser.id = "123bjk"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "sam@gamil.com",
    fullname: {
        userfullname: {
            firstname:"Neetu",
            lastname:"kanwar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)    //access nested functions

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);