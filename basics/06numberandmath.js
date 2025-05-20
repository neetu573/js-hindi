const score = 400
//console.log(score);

const balance =new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));        //if any number in decimal or wan in decimal to show client

const anotherNumber =123.8966

//console.log(anotherNumber.toPrecision(4))    //round off th vaalue

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'))         // comma in hundre value acc to indian standard

// ++++++++++++++++++ MATHS  +++++++++++++++++++++++++++

//console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,7,3,8,2));
// console.log(Math.max(4,7,3,8,2));

//console.log(Math.random());    //bydefault between 0 and 1
//console.log((Math.random() * 10) + 1);    //shift left 
//console.log(Math.floor(Math.random() * 10) + 1);   //more than 1

const min = 10
const max = 20

console.log (Math.floor(Math.random() * (max - min + 1)) + min)  //range when we give min and max 