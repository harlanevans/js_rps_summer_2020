var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors')
var game = document.getElementById('game');
var userChoice;
var compChoice;
var userScore;
var compScore;
let choices = ["Rock", "Paper", "Scissors"]

function cpuChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function render() {
  rock.addEventListener('click', () => {
    userChoice = rock.innerText;
    compChoice = cpuChoice();
    game.innerHTML = "Test"

    console.log(userChoice)
    console.log(compChoice)
  })
  paper.addEventListener('click', () => {
    userChoice = paper.innerText;
    compChoice = cpuChoice();
    console.log(userChoice)
    console.log(compChoice)
  })
  scissors.addEventListener('click', () => {
    userChoice = scissors.innerText;
    compChoice = cpuChoice();
    console.log(userChoice)
    console.log(compChoice)
  })
  console.log(userChoice)
}
    

render()