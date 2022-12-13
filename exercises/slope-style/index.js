//rest operator 
function collectAnimals(...animals) {
    /*and here*/
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]



function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
//  {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }


function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }))


  function returnFirst(items){
    const [firstItem] = items;
    return firstItem
}


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities))






//spread and rest operators 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineAnimals(...arrays) {
    // Use the spread operator to combine the arrays into a single array
    return [...arrays];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals))
// => ["dog", "cat", "mouse", "jackolope", "platypus"]




function product(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((acc, number) => acc * number, 1);
  }





  function unshift(a, b, c, d, e, ...array) {
    return [a, b, c, d, e, ...array]
  }
  





//destructering to simplify
function populatePeople(names){
    return names.map((name) => {
        const [firstName, lastName] = name.split(" ");
        // your code
        return {firstName, lastName}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


  
