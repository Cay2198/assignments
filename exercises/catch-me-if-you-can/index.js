function sum(x, y){
    //check data types first and throw error
    if(isNaN(x) || isNaN(y)){
        throw "not a number"
    }
    return x + y
  }

  try {
    console.log(sum(3,3))
  } catch(err){
    console.log(err)
  }

  


  var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if(username != "sam" || password != "123abc"){
      throw "Incorrect login information"

  } else {
    console.log("login successful!")
  }

}

try{
    console.log(login("sam", "123abc"))

} catch(err){
    console.log(err)
}