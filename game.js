function getComputerChoice (){
  let temp = Math.floor(Math.random() * 3)
  console.log(arr[temp]) //
}
function getHumanChoice(){
  let userc = prompt("请输入rock,paper,scissors 其中的一种")
  console.log(userc)//
}
function playRound(humanChoice,computerChoice){
  humanChoice = humanChoice.toLowerCase()
  console.log(humanChoice)
  if((humanChoice === 'rock' && computerChoice === 'scissors')||(humanChoice === 'scissors' && computerChoice === 'paper')||(humanChoice === 'paper' && computerChoice === 'rock')){
    humanScore++
     console.log(`You lose! ${humanChoice} beats ${computerChoice}`)
  }
  else if (humanChoice === computerChoice)
  {
    console.log("It's a tie!")
  }
  else{
    computerScore++
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }
   
}
let arr = ['rock','paper','scissors']
let humanScore = 0
let computerScore = 0 
const humanSelection = getHumanChoice()//
const computerSelection = getComputerChoice()//

playRound(humanSelection, computerSelection)