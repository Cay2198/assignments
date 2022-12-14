//let and const
const name = "John"
// const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



//ES6 Arrow Functions
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))
}

//.filter() using =>

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}


//more arrow functions

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b


//Hi Kat Stark, how does it feel to be 40?

const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 100,
};

function printString({firstName, lastName, age}){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}

console.log(printString(person))


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }
 
 console.log(filterForDogs(animals))