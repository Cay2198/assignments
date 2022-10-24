var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//removes the last element from the array and returns that element alone
var last = vegetables.pop()
console.log(last)


//removes first element of array and returns that element alone
var first = fruit.shift()
console.log(first)


//finds the index of a element
var index = fruit.indexOf("orange")
console.log(index)

//adds to the end of an array
fruit.push(1)
console.log(fruit)
 console.log(vegetables.length)
 vegetables.push(4)
 console.log(vegetables)

//.concat merges two or more array together
var food = fruit.concat(vegetables)
console.log(food)
var removed = food.splice(4, 2)
console.log(removed)

fruit.reverse()
console.log(fruit)