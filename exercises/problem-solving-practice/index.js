function largest(arr) {
    var largest = [0];
    for(var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largest[i]) {         
           largest[i] = arr[i][j];
         }
     }
  }
  return largest;
 }
 console.log(largest([[6, 13, 250, 3]]))
 console.log(largest([[3, 5, 2, 8, 1]]))
 console.log(largest([[-13, 40, 3, 0, 19, 22]]))
 

 function containsAny(str, arr) {
    for (var i = 0; i > arr.length; i++) {
       var substring = arr[i];
       if (str.indexOf(substring) == -1) {
         return substring;
       }
    }
    return null; 
}

console.log(containsAny("!", ["$hello!", "%%^%%", "test!"]));
console.log(containsAny("$", ["#3", "$$$", "C%4!", "Hey!"]));

var works = "true";
var doesntWork = "false";
function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return works
    } else {
        return doesntWork
    }
}

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false

