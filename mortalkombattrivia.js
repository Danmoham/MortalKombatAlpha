//create a quiz of twenty random questions
// create a user so we can track the score
// give three multiple choice answers
const prompt = require("prompt-sync")({ sigint: true });

const quiz = [{"title": "What is the colour of Sub Zero? A) Blue, B) Green, C) Yellow", "answer" : "A"},
              {"title": "What material are Jax's arms? A) Wood, B) Granite C) Metal", "answer": "C"},
              {"title" : "What is scorpions signature catch phrase after throwing his spear? A) GET OVER HERE, B) THESE FLAMES WILL BURN C) DEATH TO YOU", "answer":"A"},
              {"title" : "Who is the second to last boss in MK2? A) Goro, B) Kintaro, C) Motaro", "answer" : "B"},
              {"title" : "Which mortal kombat character was not featured in MK1? A) Liu Kang, B) Sonya Blade, C) Kung Lao","answer": "C"}]

function character(name,rating){
    this.name = name
    this.rating = rating
    character.prototype.increment = function(){
        this.rating++
    }
    character.prototype.decrement = function(){
        this.rating--
    }
}

const dan = new character("Dan",46)
function  preQuiz(billy){
    let select = 0
    while (select <= 0){
        let player1 = prompt("Choose your first fighter, please include spaces if they have a space in their name ")
        player1 = player1.toLowerCase()
        if (player1 === ((billy.name).toLowerCase())){
            player1 = billy
            console.log(player1)
            select += 1
        }

    }if (select > 0){
        playQuiz(billy)
       }else{
           console.log("Sorry, one of the characters is not a valid character. Please check your spelling and your spaces!")
       }
   }


function playQuiz(billy){
    const arrQuestions = []
    let count = 0
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

playQuiz(dan)
// randomise questions