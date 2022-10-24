// var numbs = [0,1,2,3,4,5,6,7,8,9].filter((number) => number%2)
// console.log(numbs)


//prints 0-9
// var numbs = [0,1,2,3,4,5,6,7,8,9]
// for(let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i])
// }


//prints 9-0
// var numbs = [0,1,2,3,4,5,6,7,8,9]
//     for(let i = numbs.length - 1; i >= 0; i--) {
//         console.log(numbs[i])
//     }


//prints out all fruit strings
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

//This one pushes the numbers 0 - 9 to a blank array. very cool
// function add(num) {
//     var array = []
//         for(let i = 0; i <= num; i ++) {
//             array.push(i)
//         }
//         return array
// }
// console.log(add(9))

function add(num) {
    var array = []
        for(let i = 0; i <= num; i ++) {
            array.push(i)
        }
        return array
}
console.log(add(100))