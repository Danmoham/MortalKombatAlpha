let globalCharacters = []
// initial object template
function character(name,catchPhrase,rating,perk){
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.rating = rating;
    this.perk = perk;
    globalCharacters.push(this)
    character.prototype.isAwesome = function(){
        console.log(`I am the beast ${this.name} and I am the best with a rating of ${this.rating} and a catchPhrase of ${this.catchPhrase}! I have the ${this.perk} perk!`)
    }
    character.prototype.isGood = function (){
        console.log(`My name is ${this.name} my catchPhrase is ${this.catchPhrase} and my rating is ${this.rating} and I am pretty Good! I have the ${this.perk} perk!`)
    }
    character.prototype.isBad = function(){
        console.log(`My name is ${this.name} my catchPhrase is ${this.catchPhrase} and my rating is ${this.rating} and I am pretty bad! I have the ${this.perk} perk!`)
    }
    character.prototype.isAwful = function(){
        console.log(`My name is ${this.name} and I am the worst, my catchPhrase is ${this.catchPhrase} and I have an awful rating of ${this.rating}! I have the ${this.perk} perk!`)
    }
    character.prototype.perk = function(){
        console.log(`My name is ${this.name} and my perk is ${this.perk}`)
    }
    character.prototype.winner = function(){
        console.log(`${this.name} wins! Flawless victory!`)

    }
    character.prototype.nameRating = function(){
        console.log(`My name is ${this.name} and my rating is ${this.rating}!`)
    }


}
// adds new characters
const subzero = new character("Sub Zero","I will end you",86, "elemental")
const scorpion = new character("Scorpion","GET OVER HERE",88, "elemental")
const sonya = new character("Sonya Blade","RushDownWizard",84, "technical")
const cassie = new character("Cassie Cage","YOU'VE BEEN CAGED",89,"technical")
const johnnycage = new character("Johnny Cage","Those are $500 sunglasses asshole",85,"technical")
const kunglao = new character("Kung Lao","Hold Still and accept your fate",81,"technical")
const raiden = new character("Raiden", "There are fates worse than death", 89, "elemental")
const kano = new character("Kano","Guilty as charged",67,"technical")
const ermac = new character("Ermac", "We are many, but you are one", 85,"wizardry")
const jax = new character("Jax","Gotcha",76,"technical")
const kenshi = new character("Kenshi","one mind, one blade", 78,"wizardry")
const shinnok = new character("Shinnok", "Tremble before me", 88,"wizardry")
const shaokahn = new character("Shao Kahn","Feel the wrath of Shao Kahn!",99,"wizardry")

 
character.prototype.game = "Mortal Kombat"

//ADDS NEW CHARACTER TO THE GAME
function addnewChar(globalCharacters){
    let checkMe;
    let happy = false
    const perks = ["elemental","wizardry","technical"]
    const prompt = require("prompt-sync")({ sigint: true });
    let newChar;
    while (happy === false){
    newChar = new character ((prompt("what is your name?")),(prompt("what is your catchphrase?")),prompt ("what is your rating?"),prompt ("what is your perk? Is it elemental, wizardry or technical?".toLowerCase()))
    let firstletter = (newChar.name.slice(0,1).toUpperCase())
    let restLetters = newChar.name.slice(1) 
    let NewName = firstletter + restLetters
    newChar.name = NewName
    newChar.rating = parseInt(newChar.rating)
    while (newChar.rating > 100  || newChar.rating < 0 || isNaN(newChar.rating)){
        newChar.rating = prompt("please Re-enter your rating, this will have to be a number below 100 and will need to be a number!")
    }
    while (perks.indexOf(newChar.perk) === -1){
        newChar.perk = prompt(("Sorry, this perk is not recognised! Please select from the following:['elemental,wizardry,technical'] ").toLowerCase())
    }
    checkMe = prompt("Are you happy with this character? please select either strictly typed 'yes' if you wish to continue with this character!".toLowerCase())
    if (checkMe === ("yes")){
        happy = true
    
    } 
    
    
    }
    console.log(globalCharacters)
    console.log(`Congratulations! Your new Character ${newChar.name} has been added to the roster!`)
}
//CHECKS CHARACTER RATING
function ratingCheck(player){
    return player.nameRating()
}
//CHECKS THE BALANCE OF THE GAME
function checkBalance(globalCharacters){
    let checker = {
        elemental : 0,
        technical : 0, 
        wizardry : 0,
    }
    for (let i = 0; i < globalCharacters.length ; i++){
        for (key in globalCharacters[i]){
           if (globalCharacters[i][key] === "elemental"){
            checker.elemental += 1
           }else if (globalCharacters[i][key] === "wizardry"){
            checker.wizardry += 1
           }else if (globalCharacters[i][key] === "technical"){
            checker.technical += 1
           }
        }
    }
    let obj = {}
    let uncommon = []
    let namesofcommon = []
    count = globalCharacters.length/3
    for (key in checker){
            if (checker[key] > count){
                obj[key] = checker[key]
                namesofcommon.push(`The ${key} perk with ${checker[key]} characters`)

            }else{
                obj[key] = checker[key]
                uncommon.push(`The ${key} perk with ${checker[key]} characters`)
        }
    }
    if (namesofcommon.length !== 0){
    console.log(`The most common type of perks is the following: ${namesofcommon}! The game is unbalanced as the following are more rare ${uncommon}.`)
}else{
    console.log(`The numbers of each element are all the same, the game is balanced!`)
}
}

//BATTLE FUNCTION
function battle(player1,player2){
    let randomize =  Math.floor(Math.random()*2)
    let play1;
    let play2;
    console.log(`This fight is between: ${player1.name} (rated currently ${player1.rating}) and ${player2.name} (rated currently ${player2.rating})! `)
    let count = 0
// elemental > techncial, technical > wizardry, wizardry > elemental
    if (player1.perk === player2.perk){
        count += (play1 = player1.rating) - (play2 = player2.rating)
    }else if((player1.perk === "technical" && player2.perk === "elemental") || (player1.perk === "elemental" && player2.perk === "wizardry") ||(player1.perk === "wizardry" && player2.perk === "technical")) {
        console.log(`${player2.name} has the advantage due to their ${player2.perk} perk, giving there oppenent ${player1.name} a 10 point debuff who has the perk ${player1.perk}!`)
        count = -10
        play1 = player1.rating + count  
        play2 = player2.rating
        count = 0
        count += play1 - play2
    }else if((player2.perk === "wizardry" && player1.perk === "technical") || (player2.perk === "elemental" && player1.perk === "wizardry") ||(player2.perk === "technical" && player1.perk === "elemental")){
        console.log(`${player1.name} has the advantage due to their ${player1.perk} perk, giving there oppenent ${player2.name} a 10 point debuff who has the perk ${player2.perk}`)
        count = -10
        play2 = player2.rating + count
        play1 = player1.rating
        count = 0
        count += play1 - play2
    }

    if (count > 0){
        console.log(`The final score was ${player1.name} with a score of ${play1} to ${player2.name}'s score of ${play2}!`)
        if (player2.rating > 0){
            player2.rating = (player2.rating -1)}
            if (player1.rating < 100){
            player1.rating = (player1.rating+1)
            }
        return player1.winner()

    }else if (play1 === play2){
        // 0 === player one
        // 1 === player two
        console.log("This is a very even match! This winner will be decided on fate only!")
       if (randomize === 0){
        if (player2.rating > 0){
            player2.rating = (player2.rating -1)}
            if (player1.rating < 100){
            player1.rating = (player1.rating +1)
            }
        return player1.winner()
       }else{
        if (player1.rating > 0){
            player1.rating = (player1.rating -1)}
            if (player2.rating < 100){
            player2.rating = (player2.rating+1)
            }
            return player2.winner()
       }

    }else{
        console.log(`The final score was ${player2.name} with a score of ${play2} to ${player1.name}'s score of ${play1}!`)
        if (player1.rating > 0){
        player1.rating = (player1.rating -1)}
        if (player2.rating < 100){
        player2.rating = (player2.rating+1)
        }
        return player2.winner()
    }
}
function weakestFirst(list){
    list.sort(function(a,b){
        return a.rating - b.rating
    }
    )}


//ORGANISE INTO BEST CHARS FIRST
function bestFirst(list1){
list1.sort(function(a,b){
    return b.rating - a.rating
})}
bestFirst(globalCharacters)

function worstOnly(list1){
    list1.sort(function(a,b){
        for (let i = 0; i <  1; i++){
            return a.rating - b.rating
        }}) 
        return list1[0].isAwful()

}
function bestOnly(list1){
    list1.sort(function(a,b){
        for (let i = 0; i < 1; i++){
            return b.rating - a.rating
}})
    return (list1[0].isAwesome())
}

let count = 0;
for (let i = 0; i <globalCharacters.length;i++){
    count += globalCharacters[i].rating ;
}
let averageRating = Math.round(count/globalCharacters.length)
// loops over array
function callAllCharacters(globalCharacters){
for (let i = 0; i < globalCharacters.length;i++){
    if (globalCharacters[i].rating > averageRating){
    globalCharacters[i].isGood()
    }else{
        globalCharacters[i].isBad()
    }
}}
function callGoodCharacters(globalCharacters){
    for (let i = 0; i < globalCharacters.length;i++){
        if (globalCharacters[i].rating > averageRating){
        globalCharacters[i].isGood();
}}}

//PlayGame
function selectMode(globalCharacters){
    let count = 0
    
    const prompt = require("prompt-sync")({ sigint: true });
    let select = prompt("Do you want to Battle or see the other possible modes? if you want to battle, please type battle, if not type any key.".toLowerCase())
    if (select === "battle"){
        while (count <= 1){
        count = 0
        let player1 = prompt("Choose your first fighter, please include spaces if they have a space in their name ")
        player1 = player1.toLowerCase()
        for (let i = 0; i < globalCharacters.length;i++){
        if (player1 === ((globalCharacters[i].name).toLowerCase())){
            player1 = globalCharacters[i]
            console.log(player1)
            count += 1
        }}
    let player2 = prompt("Choose your second fighter, please include spaces if they have a space in their name ")
    player2 = player2.toLowerCase()
    for (let j = 0; j < globalCharacters.length;j++){
        if (player2 === ((globalCharacters[j].name).toLowerCase())){
            player2 = globalCharacters[j]
            console.log(player2)
            count += 1
        }

    } if (count > 1){
    return battle(player1,player2)    
    }else{
        console.log("Sorry, one of the characters is not a valid character. Please check your spelling and your spaces!")
    }
        }}
    //let selectOther = prompt("Please select one of the following:\nCallgoodcharacters\nBestonly\nWorstonly\nCheckbalance\nRatingcheck\nAddnewchar")
    //console.log(selectOther)
    }
//callGoodCharacters(globalCharacters)
//bestOnly(globalCharacters)
//worstOnly(globalCharacters)
//battle(shaokahn,cassie)
//battle(cassie,shaokahn)
//battle(shaokahn,cassie)
//battle(shaokahn,cassie)
//checkBalance(globalCharacters)
selectMode(globalCharacters)
