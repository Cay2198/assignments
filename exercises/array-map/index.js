function doubleNumbers(arr){
    // your code here
    // let array1 = {
    //     array1: arr.map(function (n) { return n * 2; })
    // };
    // return array1
    const result = arr.map(n => n * 2)
    return result
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



  function stringItUp(arr){
    // your code here
    const result = JSON.stringify(arr.map(String))
    return result
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  






  function capitalizeNames(arr){
    // your code here
        return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
      });
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  




  function namesOnly(arr){
    // your code here
    return arr.map(function(obj){
    return obj.name
    })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  




  function makeStrings(arr){
    // your code here
    return arr.map(function(obj){
        let ofAge = obj.age < 18 ? obj.name + " is under age!" : obj.name + " can go to the Matrix!";
        return ofAge 
        })
    // let ofAge = arr.map(function(obj)) ? parseInt(localStorage.getItem('myClicks')) : 0;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  





  function readyToPutInTheDOM(arr){
    // your code here
    return arr.map(function(obj){
        // const sort = obj.name ? "<h1>" + obj.name + "</h1" : "<h2>" + obj.age + "</h2";
        // return sort
        return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>"
        })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]