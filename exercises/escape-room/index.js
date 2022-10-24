const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello, " + name + ". Let's play a game...." + 
"As you can already tell you've been bound where you are by " +
"chains, Except for your right hand that is.... " +
"You can 'reach into the dark hole' next to you... " + 
"or you can try to 'open the lock' that's keeping you in place. " +
"maybe you should try to 'find the key' before doing that....")
const choice1 = readline.question("what will you do?: ")
if(choice1 === "reach into the dark hole"){
    console.log("Death has fallen to you....")
} else if(choice1 === "open the lock"){
    console.log("How are you going to open it without a key?")
} else if(choice1 === "find the key"){
    console.log("you kick your feet and knock a metallic object slightly. Using your feet you feel around for it: Play the game to find the key")
 
    const choice2 = readline.question("what will you do with the key?: ")
    if(choice2 === "open the lock") {
        console.log("you've escaped!!")
    }
}

 