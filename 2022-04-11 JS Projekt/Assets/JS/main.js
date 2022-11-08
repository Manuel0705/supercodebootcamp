// console.log("hi");

// ================== Projeckt Rock Paper Scissors ===================
// =================== ohne Select Btn ================================

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;
// console.log(choiceBtns);
// choiceBtns.forEach((button) =>
//   button.addEventListener("click", () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
//   })
// );

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       computer = "ROCK";
//       break;
//     case 2:
//       computer = "PAPER";
//       break;
//     case 3:
//       computer = "SCISSORS";
//       break;
//   }
// }

// function checkWinner() {
//   if (player == computer) {
//     return "Draw!";
//   } else if (computer == "Rock") {
//     return player == "PAPER" ? "You Win!" : "You Lose!";
//   } else if (computer == "Paper") {
//     return player == "SCISSORS" ? "You Win!" : "You Lose!";
//   } else if (computer == "SCISSORS") {
//     return player == "ROCK" ? "You Win!" : "You Lose!";
//   }
// }

// ================== Projeckt Rock Paper Scissors ===================
// =================== mit Select Btn ================================

const threeRounds = document.querySelector("#threeRounds").checked;
const fiveRounds = document.querySelector("#fiveRounds").checked;
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
console.log(choiceBtns);
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "Paper") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}
