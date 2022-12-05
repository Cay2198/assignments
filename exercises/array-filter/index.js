function fiveAndGreaterOnly(arr) {
    // your code here
    const great = arr.filter(arr => arr >= 5)
    return great
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  

  function evensOnly(arr) {
    // your code here
    const even = arr.filter(arr => arr % 2 === 0)
    return even
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  function fiveCharactersOrFewerOnly(arr) {
    // your code here
    const char = arr.filter( (element) => element.length <= 5);
    return char

  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
  

  function peopleWhoBelongToTheIlluminati(arr){
    // your code here
    const members = arr.filter(arr => arr.member === true)
    return members
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
  


  function ofAge(arr){
    // your code here
    const age = arr.filter(arr => arr.age >=18)
    return age
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]