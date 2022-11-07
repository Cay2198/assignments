const readline = require("readline-sync")
const playerName = readline.question("What is your name? ")
console.log("Hello " + playerName + ". As a born hero you've been given a quest." +
"\nGoblin Subjugation. \nYour quest brings you to the entrance of a cave not far from the city. \nLit only with the torch you've brought with you, it's time to start the quest.")
let monsters = class {
    constructor(mName, hp, strength, item){
        this.Name = mName;
        this.Hp = hp;
        this.strength = strength
        this.item = item;
        
    }
}

let status = class {
    constructor(pName, hp, strength, inventory){
        this.name = pName;
        this.hp = hp;
        this.strength = strength
        this.inventory = []
    }
}

let mc = new status (playerName, 100, 20)

let goblin = new monsters ("Goblin", 30, 5 ,"Tattered Cloth")
let goblinKing = new monsters ("Goblin King", 60, 20, "Gold Crown")
let dragon = new monsters ("Red Dragon", 9999999, 9999999, "Riches beyond measure")

function goblinCombat(){
    if(mc.hp >= 0 && goblin.Hp >=0){
        const battleChoice = readline.question("(a) To attack!, (r) To RUN!, (s) Your status, (m) Monster status\n")
        if(battleChoice === "a"){
            mcAttackGoblin(goblin)
            console.log("You trade blows with the goblin!")
            goblinAttack(mc)
            console.log("Goblin HP: " + goblin.Hp, "Your HP: " + mc.hp)
            goblinCombat()
        } else if(battleChoice === "r"){
            console.log("You cower in fear. While those around you may look down, you can at least adventure for another day.")
        } else if(battleChoice === "s"){
            console.log(mc)
            goblinCombat()
        } else if(battleChoice === "m"){
            console.log("Goblin HP: " + goblin.Hp)
            goblinCombat()
        }
    } else if(goblin.Hp <= 0){
        mc.inventory.push(goblin.item)
        console.log("You have defeated the goblin!")
    } else if(mc.hp <= 0){
        console.log("You have been defeated Hero....")
        death()
    } else {
        console.log("error")
    }

}

function goblinKingCombat(){
    if(mc.hp >= 0 && goblinKing.Hp >=0){
        const battleChoice = readline.question("(a) To attack!, (r) To RUN!, (s) Your status, (m) Monster status\n")
        if(battleChoice === "a"){
            mcAttackGoblinKing(goblinKing)
            console.log("You trade blows with the Goblin King!")
            goblinKingAttack(mc)
            console.log("Goblin King HP: " + goblinKing.Hp, "Your HP: " + mc.hp)
            goblinKingCombat()
        } else if(battleChoice === "r"){
            console.log("You cower in fear. While those around you may look down, you can at least adventure for another day.")
        } else if(battleChoice === "s"){
            console.log(mc)
            goblinKingCombat()
        } else if(battleChoice === "m"){
            console.log("Goblin King HP: " + goblinKing.Hp)
            goblinKingCombat()
        }
    } else if(goblinKing.Hp <= 0){
        mc.inventory.push(goblinKing.item)
        console.log("You have defeated the Goblin King!")
    } else if(mc.hp <= 0){
        console.log("You have been defeated Hero....")
        death()
    } else {
        console.log("error")
    }

}

function dragonCombat(){
    if(mc.hp >= 0 && dragon.Hp >=0){
        const battleChoice = readline.question("(a) To attack!, (r) To RUN!, (s) Your status, (m) Monster status\n")
        if(battleChoice === "a"){
            mcAttackDragon(dragon)
            console.log("You trade blows with the Dragon! It seems to have no little effect....")
            dragonAttack(mc)
            console.log("Dragon HP: " + dragon.Hp, "Your HP: " + mc.hp)
            dragonCombat()
        } else if(battleChoice === "r"){
            console.log("You cower in fear. While those around you may look down, you can at least adventure for another day.")
        } else if(battleChoice === "s"){
            console.log(mc)
            dragonCombat()
        } else if(battleChoice === "m"){
            console.log("Dragon HP: " + dragon.Hp)
            dragonCombat()
        }
    } else if(dragon.Hp <= 0){
        mc.inventory.push(dragon.item)
        console.log("You have defeated the Dragon!")
    } else if(mc.hp <= 0){
        console.log("You have been defeated Hero....")
        death()
    } else {
        console.log("error")
    }

}


function encounter(){
    let encounterChance = (Math.random() * 4) + 1
    if (encounterChance < 1.99){
    readline.question("You venture further into the cave cautiously....") 
    
    
} else if (encounterChance < 2.99){
        readline.question("You've stumbled into the path of a goblin!\nPrepare for battle by pressing 'Enter'")
        goblinCombat()
    }
    if (encounterChance < 3.99){
        if(goblinKing.Hp <= 0){
            console.log("Nothing of interest yet")
        } else {
            readline.question("You've stumbled into the Goblin King!!\nPrepare for battle by pressing 'Enter'")
            goblinKingCombat()
        }
    } else {
        if(dragon.Hp <= 0){
            console.log("Nothing of interest yet")
    } else {
        readline.question("Your luck seems to have hit an all-time low. Before you is the great Red Dragon. You will be forever missed, Hero.\nPrepare for battle by pressing 'Enter'")
            dragonCombat()
    }
}
idle()
}
//goblin attack
let goblinAttackDamage = goblin.strength + (Math.floor(Math.random() * 10) + 1)
function goblinAttack() {
    mc.hp = mc.hp - goblinAttackDamage
    return mc.hp
}
//goblin king attack
let goblinKingAttackDamage = goblinKing.strength + (Math.floor(Math.random() *10) + 1)
function goblinKingAttack() {
    mc.hp = mc.hp - goblinKingAttackDamage
    return mc.hp
}

//dragon attack
let dragonAttackDamage = dragon.strength + (Math.floor(Math.random() * 10) + 1)
function dragonAttack() {
    mc.hp = mc.hp - dragonAttackDamage
    return mc.hp
}

//Players attack - Goblin
function mcAttackGoblin() {
    mcAttackDamage = mc.strength + (Math.floor(Math.random() * 10) + 1)
    goblin.Hp = goblin.Hp - mcAttackDamage
    return goblin.Hp
}

//Players attack - Goblin King
function mcAttackGoblinKing() {
    mcAttackDamage = mc.strength + (Math.floor(Math.random() * 10) + 1)
    goblinKing.Hp = goblinKing.Hp - mcAttackDamage
    return goblinKing.Hp
}

//Players attack - Dragon
function mcAttackDragon() {
    mcAttackDamage = mc.strength + (Math.floor(Math.random() * 10) + 1)
    dragon.Hp = dragon.Hp - mcAttackDamage
    return dragon.Hp
}

while(mc.hp > 0){
    idle()
}




function idle(){
    const idle = readline.question("(w) To walk forward, (i) For inventory, (s) For Status\n")
        if(idle === "w"){
            encounter()
        } else if(idle === "i"){
            console.log(mc.inventory)
            
        } else if(idle === "s"){
            console.log(mc)
        }
}

function death(){
    if(mc.hp <= 0){
        console.log("You've succumbed to death....")
        process.exit()
    }
}