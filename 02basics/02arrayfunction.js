const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//marvelHeros.push(dc_heros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const allHeros= marvelHeros.concat(dc_heros)
// console.log(allHeros);

const allnewheros = [...marvelHeros, ...dc_heros]
//console.log(allnewheros);

const anotherarray = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const realanotherarray = anotherarray.flat(Infinity)    //open up the complex type of array
//console.log(realanotherarray);

console.log (Array.isArray("Neetu"))
console.log (Array.from("Neetu"))   //convert in array
console.log (Array.from({name:"Neetu"}));  //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));