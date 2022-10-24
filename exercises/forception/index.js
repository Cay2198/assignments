var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// for(let i = 0; i < people.length; i++) {

// }
// alphabet.join(" ")
// function forception(people, alphabet){
// for(let i = 0; i < people.length; i++) {
//     for(let j = 0; j < alphabet.length; j++) {
//    var newList = people[i].concat(" " + alphabet)

// }
// }
// return newList
// }
// console.log(forception(people, alphabet))
var alphabet = alphabet.split("")
function forception(people, alphabet){
for(let i = 0; i < people.length; i++){
    for(let j = 0; j < alphabet.length; j++) {
        if(i < people.length){
            var newPeople = people[i].split(alphabet[j])
        
            return newPeople 
        }
    }
}
}
console.log(forception(people,alphabet))