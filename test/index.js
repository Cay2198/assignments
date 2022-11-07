const readlineSync = require('readline-sync')
console.log("Hey you, you're finally awake. What's your name? ")
const name = readlineSync.question("You! tell me your name atleast, before we get our heads chopped off. \n Tell him your name >>> ");
class player {
    constructor(name, health, inventory) {
    this.name = name,
    this.health = health,
    this.inventory = []
}
isAlive(){
return this.health > 0
}
}
const hero = new player ('player', 40)
console.log("Welcome to Skyrim " +name+ " ...I used to be an adventurer just like you \n...untill I took an arrow to the knee ")
class enemySkyrim {
    constructor(name, health, loots) {
    this.health = health
    this.originalHp = health
    this.alive = true
    this.run = true
    this.name = name
    this.loots = loots
}}
let helgenGuard = new enemySkyrim ('Helgen Guard', 30, 'Steel helmet')
let empireGuard = new enemySkyrim ('Empire guard', 40, 'steel shield')
let stormCloak = new enemySkyrim ('Stormcloak soldier', 45, 'bow')
    while (hero.isAlive()) {
const input = readlineSync.keyIn("[w]walk\n[p]print\n[q]quit", {limit: 'wpq'})
    if (input === 'w') walk(hero)
    if (input === 'p') {
console.log(hero)
readlineSync.question('Enter to go back')
}
    if (input === 'q') readlineSync.questionInt(hero, NaN)
function walk(randomEnemy = Math.floor(Math.random() * 3)) {
let rollDie = Math.floor(Math.random() * 4)
console.log(rollDie)
    if (rollDie == 0) {
readlineSync.question("Trinkets, odds and end, that sort of things")
}
    if (rollDie == 1) {
readlineSync.question("Hey you!...you look familiar")
}
    if (rollDie == 2) {
readlineSync.question("Need a ride?")
}
    if (rollDie == 3) {
let randomEnemy = Math.floor(Math.random() * 3)
console.log(randomEnemy)


///Battle function\\\

function battleEnemy(randomEnemy) {
    if (randomEnemy == 0) {
randomEnemy = encounter(helgenGuard, hero, 30, 5, randomEnemy);
}
    if (randomEnemy == 1) {
randomEnemy = encounter(empireGuard, hero, 40, 10, randomEnemy);
}
    if (randomEnemy == 2) {
randomEnemy = encounter(stormCloak, hero, 45, 15, randomEnemy);
}
return randomEnemy!== 3
}
    if (!battleEnemy(randomEnemy)) {
        if (!battleEnemy(0)) {
readlineSync.question("***Scream 'FOR SKYRIMMMMMMMMMMMMMM' ")
hero.alive = false
}
}
}
    if (hero.health <= 0) {
        endGame (hero)
}
}
}
function battle (npc, me, shout, melee) {
    let actions = ['[A]attack', '[R]run', '[x]coward way out']
    // .forEach() = method calls a function for each element in an array
}
function attackDamage (shout, melee, gettingAttack) {
    let attackNum = Math.floor(Math.random() * (shout - melee) + 1 ) + melee;
    gettingAttack.health = gettingAttack.health - attackNum
}
function encounter (npc, hero, npcHighDam, npcLowDam, nextNum) {
    if (npc.alive === false) {
        // "++" add ome to (increment)
        nextNum++
    }
    if (npc.alive === true) {
        npc.ran = true
        readlineSync.question( name +':' + " Well hello there. " + npc.name + ' has entered combat mode' + " ENTER to continue")
        while (npc.alive && npc.ran) {
            console.log( name + " You have " + hero.health +"health")
            console.log('NPC health is ' + npc.health)

            battle (npc, player, 30, 10)
            if (npc.ran) {
                attackDamage (npcHighDam, npcLowDam, player)
            }
            
        }
    }
    return nextNum
}