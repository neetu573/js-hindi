//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array (1,2,3,4)
//console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)            //add value in last
// myArr.pop()              //remove the last value

//myArr.unshift(0)            //add in the start of the list
//myArr.shift()               //remove from start

//console.log(myArr);
//console.log(myArr.includes(9));             
//console.log(myArr.indexOf(19));          //neg if value is not available

//const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);    //value remane same only typeof changes

//slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)       //remane same give slice range seprate and wothon the array
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)    //manipulate original array splice the given range
console.log("C ",myArr);
console.log(myn2);