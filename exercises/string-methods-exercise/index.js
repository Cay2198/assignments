var hello = "hello"
var he = "i can't believe this works"


//auto uppercases a string
function fun(str) {
    return str.toUpperCase();  
  }
  console.log(fun(hello))



// shows half the value of a string
  function math(str) {
    var newValue = Math.floor(str.length / 2)
      return newValue
  }
  console.log(math(he))
//returns first half of a string 
  function slice(str) {
      if(str.length % 2 == 0) {
          return str.slice(0, str.length / 2)
      }
      return str
  }
  console.log(slice(he))

  function splitCase(str) {
    if(str.length % 2 == 0) {

        return str.toUpperCase().slice(0, str.length / 2)
    } else {
        str.toLowerCase()
    return str
    }
  }
  console.log(splitCase(hello))