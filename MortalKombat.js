const prompt = require("prompt-sync")({ sigint: true });
const globalCharacters = []
const wiz = []
const tech = []
const elem = []
const quiz = [{"title": "What is the colour of Sub Zero? A) Blue, B) Green, C) Yellow", "answer" : "A"},
              {"title": "What material are Jax's arms? A) Wood, B) Granite C) Metal", "answer": "C"},
              {"title" : "What is scorpions signature catch phrase after throwing his spear? A) GET OVER HERE, B) THESE FLAMES WILL BURN C) DEATH TO YOU", "answer":"A"},
              {"title" : "Who is the second to last boss in MK2? A) Goro, B) Kintaro, C) Motaro", "answer" : "B"},
              {"title" : "Which mortal kombat character was not featured in MK1? A) Liu Kang, B) Sonya Blade, C) Kung Lao","answer": "C"}]
// initial object template
function character(name,catchPhrase,rating,perk){
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.rating = rating;
    this.perk = perk;
    if (perk === "wizardry"){
        wiz.push(this)
    } else if (perk === "elemental") {
        elem.push(this)
    } else if (perk === "technical"){
        tech.push(this)
    }
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
    character.prototype.fullDetails = function(){
        console.log(`My name is ${this.name} and my rating is ${this.rating} and my perk is ${this.perk}!`)
    }
    character.prototype.increment = function(){
        this.rating++
    }
    character.prototype.decrement = function(){
        this.rating--
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
const shaokahn = new character("Shao Kahn","Feel the wrath of Shao Kahn!",93,"wizardry")
const baraka = new character("Baraka","I will eat your flesh",72,"elemental")
const kotalkahn = new character("Kotal Kahn","Ack-Na ! Kot-tek-kah!",87, "wizardry")
const sindel = new character("sindel","AAAAAAA - high pitch scream", 92, "wizardry")
const mileena = new character("mileena","Let us dance!",87,"elemental")

 
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
function ratingCheck(globalCharacters){
    let x = true
    while (x){
    let choose = prompt("Please select your character you want to check the details of. Please remember to use spaces when applicable.")
    choose = choose.toLowerCase()
    for (let i = 0; i < globalCharacters.length;i++){
        if ((globalCharacters[i].name.toLowerCase()) === choose){
        return globalCharacters[i].fullDetails()
        }
    }
    console.log("Sorry, this name is not recognised. Please try again.")
}
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
    const randomize =  Math.floor(Math.random()*2)
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

function callType(){
    let userinput = prompt("Please type the perk requested: ")
    userinput = userinput.toLowerCase()
    console.log(userinput)
    let conclude = true
    while (conclude === true) {
    if (userinput === "wizardry"){
        console.log(wiz.length)
        for (let i = 0; i < wiz.length;i++){
            wiz[i].fullDetails()
        }
        conclude = false
        break
    }else if (userinput === "technical"){
        console.log(tech.length)
        for (let i = 0; i < tech.length;i++){
            tech[i].fullDetails()
        }
        conclude = false
        break
    }else if (userinput === "elemental"){
        for (let i = 0; i < elem.length;i++){
            elem[i].fullDetails()
        }
        conclude = false
        break
    }
userinput = prompt("sorry, this is incorrect! please select a valid perk style: ")
}

}

function bestOnly(list1){
    list1.sort(function(a,b){
        for (let i = 0; i < 1; i++){
            return b.rating - a.rating
}})
    return (list1[0].isAwesome())
}
//GETS ALL OF CHARACTERS RATINGS
const allRatings = globalCharacters.reduce((sum, globalCharacters) => sum + globalCharacters.rating,0)
const averageRating = Math.round(allRatings/globalCharacters.length)
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
function  preQuiz(globalCharacters){
    let select = 0
    while (select <= 0){
        let player1 = prompt("Choose the fighter you want to use for the quiz")
        player1 = player1.toLowerCase()
        for (let i = 0; i < globalCharacters.length;i++){
        if (player1 === ((globalCharacters[i].name).toLowerCase())){
            player1 = globalCharacters[i]
            console.log(`The fighter that will be being quizzed is ${globalCharacters[i].name} with a rating of ${globalCharacters[i].rating} depending on their score will depend on if they get a upgrade or a downgrade`)
            return playQuiz(player1)
            select += 1
        }}
           console.log("Sorry, one of the characters is not a valid character. Please check your spelling and your spaces!")
       }
   }

   function playQuiz(billy){
    let count = 0
    let questionCounter = prompt("How many questions would you like to be asked? Please reply only with a number.")
    questionCounter = parseInt(questionCounter)
    while ((questionCounter > quiz.length && questionCounter > 0) || isNaN(questionCounter)){
        questionCounter = prompt(`This has to be a number and has to be less than or equal to the the length of the quiz which is ${quiz.length}!`)
    }
    const arrQuestions = []
    let questionsRecord = 0
    let x = (quiz[Math.floor(Math.random() * quiz.length)])
    while (questionCounter > questionsRecord){
    while (arrQuestions.indexOf(x) !== -1){
     x = (quiz[Math.floor(Math.random() * quiz.length)])
    }
    console.log(x.title)
    let user = prompt("please select the option A B or C")
    while (user.length > 1){
        user = prompt("PLEASE ENSURE YOU ENTER ONLY ONE LETTER, A, B OR C!!!")
    }
    user = user.toUpperCase()
    if (x.answer === user){
        count += 1
        console.log(`That is correct!`)
    }else{
        count -= 1
        console.log(`That is wrong, the answer was ${x.answer}!`)
    }
    arrQuestions.push(x)
    questionsRecord += 1
    }
    if (count > 0){
        billy.increment()
        console.log(`${billy.name}'s rating has now improved by one point to ${billy.rating}, due to having a positive number of answers`)
    }else if ( 0 > count){
        billy.decrement()
        console.log(`${billy.name}'s rating has now dropped by one point to ${billy.rating}, due to having too many incorrect answers`)
    }else{
        console.log(`${billy.name}'s rating will remain the same`)
    }
}

function battlePrep(globalCharacters){
    let count = 0
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
     battle(player1,player2)    
    }else{
        console.log("Sorry, one of the characters is not a valid character. Please check your spelling and your spaces!")
    }
}
}

//PlayGame
function selectMode(globalCharacters){
    const allModes = [{num : 1, mode : function() {(callGoodCharacters(globalCharacters))}},
        {num : 1, mode : function (){bestOnly(globalCharacters)}, description : "Callgoodcharacters only"},
        {num : 2, mode : function () {worstOnly(globalCharacters)}, description : "the worst only character"},
        {num : 3, mode : function () {checkBalance(globalCharacters)}, description : "Check the balance of the game"},
        {num : 4, mode : function () {callAllCharacters(globalCharacters)}, description : "Call all characters"},
        {num : 5, mode : function () {battlePrep(globalCharacters)}, description : "Battle"},
        {num : 6, mode :  function () {addnewChar(globalCharacters)}, description : "add new character"},
        {num : 7, mode : function () {callType(globalCharacters)}, description : "Call perk type to check how many characters have this perk"},
        {num : 8, mode : function () {preQuiz(globalCharacters)}, description : "thequiz"},
        {num : 9, mode : function () {ratingCheck(globalCharacters)}, description : "Check the rating for a specific character"}
        ]
    let count = 0
    let run = false
    while (run === false){
        console.log("The modes are the following")
        for (let i = 1; i < allModes.length; i++){
            console.log(`Mode ${allModes[i].num} is ${allModes[i].description}!`)
        }
// console.log("The modes are one of the following:  1 - Callgoodcharacters,2 - Bestonly,3 - Worstonly,4 - Checkbalance,5 - Ratingcheck, 6 - battle,7 - Addcharacter, 8 - type a perk to see the list of characters, which have the perk")
     let selectOther = prompt(`Please select the number you need: `)
     console.log(`Your number is ${selectOther}`) 
     selectOther = (parseInt(selectOther))
        if (selectOther === NaN){
            console.log("sorry this is not a valid number, try again!")
        }else if ((selectOther < 1) || (selectOther > allModes.length)){
            console.log("The number does not fall in between numbers 1-6, try again!")
        }else {
            for (let key in allModes){
                if (allModes[key].num === selectOther){
                    allModes[key].mode(globalCharacters)
                }
            }
        }
    let conclude = prompt("Are you finished with the game? please type yes if you wish to finish")
    conclude = conclude.toLowerCase()
        if (conclude === "yes"){
            console.log("Your game will now finish!")
            run = true 
        }
    }    
}


selectMode(globalCharacters)
