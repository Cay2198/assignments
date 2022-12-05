function total(arr) {
    // your code here
    sum = arr.reduce((final , num) => final + num, 0)
    return sum
 }
 
 console.log(total([1,2,3])); // 6
 


 function stringConcat(arr) {
    // your code here
    concat = arr.reduce((final, str) => 0 ? str : final + "" + str )
    return concat
 }
 
 console.log(stringConcat([1,2,3])); // "123"
 




 function totalVotes(arr) {
    // your code here
    // const voteCount = arr.voted.reduce((final, prev) => prev ? final + 1 : final)
    // return voteCount
    const result = Object.values(arr).reduce((final, prev) => {
        if (prev.voted) ++final;
        return final;
      }, 0);
      return result
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7
 

 
 
 
 
 function shoppingSpree(arr) {
    // your code here
    const total = Object.values(arr).reduce((a, b) => a + b.price, 0)
    return total
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005
 



 function flatten(arr) {
    // your code here
    concat = arr.reduce((final, str) => final.concat(str) )
    return concat
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 




 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
    const reducedObject = arr.reduce((final, prev) => {
      if(prev.age >= 18 && prev.age <= 25 && prev.voted) {
        final.numYoungVotes++;
      }
      if(prev.age >= 18 && prev.age <= 25) {
        final.numYoungPeople++;
      }
      if(prev.age >= 26 && prev.age <= 35 && prev.voted) {
        final.numMidVotesPeople++;
      }
      if(prev.age >= 26 && prev.age <= 35) {
        final.numMidsPeople++;
      }
      if(prev.age >= 36 && prev.age <= 55 && prev.voted) {
        final.numOldVotesPeople++;
      }
      if(prev.age >= 36 && prev.age <= 55) {
        final.numOldsPeople++;
      }
      return {...final};
    }, {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    });
    return reducedObject;
  };

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
