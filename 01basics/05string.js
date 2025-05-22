const name = "neetu"
const repoCount = 50

//console.log(name + repoCount + "value")

//console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('neetu-NC')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));         //output  u
//console.log(gameName.indexOf('t'));      //output 3

const newString = gameName.substring(0, 4)
//console.log(newString);               //output neet

const anotherString = gameName.slice(-7, 4)
//console.log(anotherString);           //output eet

const newStringOne = "    hitesh     "
//console.log(newStringOne);
//console.log(newStringOne.trim());        //remove extra space from start and end of a string

const url ="https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20','-'));        //replace anyhting in the string

//console.log(url.includes('hitesh'));          //can ask anything available in string or not  

console.log(gameName.split('-'))                //split string on some basis