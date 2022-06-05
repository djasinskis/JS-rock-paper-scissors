const playerChoiceDisplay = document.querySelector(".playerChoice")
const computerChoiceDisplay = document.querySelector(".computerChoice")
const gameResult = document.querySelector(".results")
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")
const startGamebutton = document.querySelector(".btnstart")
const gamebuttons = document.querySelector(".gamebuttons")
const player = document.querySelector(".player")
var playerResult = document.getElementById("playerResult")
var computerResult = document.getElementById("computerResult")

playerStats = 0
computerStats = 0

// playerChoiceDisplay.append(playerChoice,computerChoice)

const choices = ["rock","paper","scissors"];
let userChoice
let computerChoice

btnRock.addEventListener("click",function(e){
    
    playerChoice = document.createElement("div")
    btnRock.classList.add("selected")
    btnPaper.classList.remove("selected")
    btnScissors.classList.remove("selected")
    player.innerHTML= ""
    playerChoice.innerHTML = 
    `
     <h1>Player choice: </h1>
     <div class="playerChoice">${e.target.innerHTML}</div>


    `
    player.append(playerChoice)
    userChoice = e.target.innerHTML
    console.log(userChoice)
   
  
})
btnPaper.addEventListener("click",function(e){
    playerChoice = document.createElement("div")
    btnPaper.classList.add("selected")
    btnRock.classList.remove("selected")
    btnScissors.classList.remove("selected")
    player.innerHTML= ""
    playerChoice.innerHTML = 
    `
     <h1>Player choice: </h1>
     <div class="playerChoice">${e.target.innerHTML}</div>


    `
    player.append(playerChoice)
    userChoice = e.target.innerHTML
   console.log(userChoice)
})
btnScissors.addEventListener("click",function(e){
    playerChoice = document.createElement("div")
    btnScissors.classList.add("selected")
    btnRock.classList.remove("selected")
    btnPaper.classList.remove("selected")
    player.innerHTML= ""
    playerChoice.innerHTML = 
    `
     <h1>Player choice: </h1>
     <div class="playerChoice">${e.target.innerHTML}</div>


    `
    player.append(playerChoice)
   userChoice = e.target.innerHTML
   console.log(userChoice)
})




startGamebutton.addEventListener("click",function(){
if(userChoice === undefined){
    alert("Please choose rock, paper or scissors!")
} else {
genereateComputerChoice()
getResult()

}

})

const genereateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random()* choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML= computerChoice
    console.log(computerChoice)
}


const getResult = () => {
    switch(userChoice + computerChoice){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            gameResult.innerText = "You win !"
              playerStats += 1
              playerResult.innerHTML = playerStats
            
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            gameResult.innerHTML = "Computer Wins !"
            computerStats += 1
            computerResult.innerHTML = computerStats
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            
            gameResult.innerHTML = "It's a draw !"
            break;
    }
}