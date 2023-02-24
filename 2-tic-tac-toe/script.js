let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let gameoverAudio = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win
const checkWin = () => {
  let boxText = document.querySelectorAll(".box-text");
  console.log(boxText);
  let wins = [
    [0, 1, 2, -12, 5, 0],
    [3, 4, 5, -12, 15, 0],
    [6, 7, 8, -12, 25, 0],
    [0, 3, 6, -22, 15, 90],
    [1, 4, 7, -12, 15, 90],
    [2, 5, 8, -2, 15, 90],
    [0, 4, 8, -12, 15, 45],
    [2, 4, 6, -12, 15, 135],
  ];

  wins.forEach((item, ind) => {
    console.log(item);
    console.log(boxText[ind].innerText);
    if (
      boxText[item[0]].innerText !== "" &&
      boxText[item[0]].innerText === boxText[item[1]].innerText &&
      boxText[item[2]].innerText === boxText[item[1]].innerText
    ) {
      document.querySelector(".info").innerText =
        boxText[item[0]].innerText + " won";
      isGameOver = true;
      document.getElementById("img-box").classList.remove("d-none");
      document.querySelector(".line").style.width = "30vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${item[3]}vw, ${item[4]}vw) rotate(${item[5]}deg)`;
    }
  });
};

//Game logic
let boxes = document.querySelectorAll(".box");
boxes.forEach((element) => {
  let boxText = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    if (boxText.innerText === "" && !isGameOver) {
      console.log(turn);
      boxText.innerText = turn;
      turn = changeTurn();
      turnAudio.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// reset functionality
reset.addEventListener("click", () => {
  // alert("reset");
  let boxTexts = document.querySelectorAll(".box-text");
  boxTexts.forEach((item) => {
    item.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.getElementById("img-box").classList.add("d-none");
  // boxTexts.innerText = "";
  document.querySelector(".line").style.width = "0vw";
});

//improvements - implement match draw case
