// var powerRangers = [
//     "Jason Lee Scott",
//     "kimberly Hart",
//     "Zack Taylor",
//     "Trini Kwan",
//     "Billy Cranston"
// ]
var powerRangers = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]
var rangersList = document.getElementById("rangers")

  for (var i = 0; i < powerRangers.length; i++) {
    // newName += powerRangers.name + powerRangers.color
    // var newName = document.createElement("li")
    // newName.textContent = powerRangers.name + powerRangers.color
    
    // rangersList.append(newName)

      rangersList.innerHTML += "<li>" + powerRangers[i].name + ' - ' + powerRangers[i].color + "</li>"
 }
  
// let newName = "" 
// for (let x in powerRangers) {
//   text += powerRangers[x]
// }
//var rangersList = document.getElementById("rangers")
// var rangersList = function() {
//     for (let i = 0; i <= powerRangers.length; i++) {
//         rangersList.innerHTML += "<li>" + powerRangers[i].name + ' ' + powerRangers[i].color
//         var newName = document.createElement("li")
//         newName.textContent = rangersList
//     }
// }





// var rangerList = document.getElementById("rangers")
// var listRangers = function() {
//     return powerRangers.map(function(powerRangers) {
//         return powerRangers.name + " " + powerRangers.color
//     })

// }