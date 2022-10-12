// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// // for(i = 0; i < officeItems.length; i++){
// //     var count = officeItems[i]
// //     if(i === "monitor"){
// //         console.log(count)
// //     }
// // }
// // var count = 1
// // for(let i = 0; i <= officeItems.length; i++){
// //     // console.log(officeItems[i])
// //     if(officeItems[i] === "computer") {
// //         console.log(count++)
// //         return count
// //     }
// // }
// function getOccurrence(array, value) {
//     return array.filter((v) => (v === value)).length;
// }

// console.log(getOccurrence(officeItems, "computer")); 

var madMaxGoers = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },
    {
      name: "Cheryl",
      age: 22,
      gender: "female"
    },
    {
      name: "Sam",
      age: 30,
      gender: "male"
    },
    {
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
var ageGroup1 = []
var ageGroup2 = []
  for(var i = 0; i < madMaxGoers.length; i++){
    var watchGroup = madMaxGoers[i].name
    if(madMaxGoers[i].age <= 18){
    ageGroup1.push(watchGroup)
    } else if(madMaxGoers[i].age >=18){
        ageGroup2.push(watchGroup)
    }
}

console.log(ageGroup1 + " is too young!!")
console.log(ageGroup2 + " is old enough!!")