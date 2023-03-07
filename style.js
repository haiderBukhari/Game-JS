"use strict";
let container = document.querySelector('.container')
document.querySelector('#btno').addEventListener('click', ()=>{
    document.querySelector('.agreement').classList.add('hidden');
    container.classList.remove('hidden');
})




let current_player1 = 0;
let current_player2 = 0;
let count = 0;
let start = 0;
let list = [];
list[1] = document.querySelector(".firsts");
list[2] = document.querySelector(".seconds");
list[3] = document.querySelector(".thirds");
list[4] = document.querySelector(".fourths");
list[5] = document.querySelector(".fifths");

let player_1 = document.querySelector("#p1");

let player_2 = document.querySelector("#p2");

let player_1_current = document.querySelector(".play1");

let player_2_current = document.querySelector(".play2");
let ftn = () => {
  player_1_current.textContent = 0;
  player_2_current.textContent = 0;
};

document.querySelector(".btn0").addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    if (list[i].classList.contains("hidden")) {
      list[i].classList.remove("hidden");
    }
  }
  let alpha = Math.floor(Math.random() * 5 + 1);
  for (let i = 1; i <= 5; i++) {
    if (alpha == i) {
      continue;
    } else {
      list[i].classList.add("hidden");
    }
  }

  if (count % 2 == 0) {
    current_player1 += alpha;
    player_1_current.textContent = current_player1;
  } else {
    current_player2 += alpha;
    player_2_current.textContent = current_player2;
  }
  if (alpha == 1) {
    current_player1 = 0;
    current_player2 = 0;
    player_1_current.textContent = 0;
    player_2_current.textContent = 0;
    count++;
}
  if (count % 2 == 0) {
    document.querySelector("#f_person").style.backgroundColor = "#dfaeae80";
    document.querySelector("#s_person").style.backgroundColor = "#ffffff80";
  } else {
    document.querySelector("#s_person").style.backgroundColor = "#dfaeae80";
    document.querySelector("#f_person").style.backgroundColor = "#ffffff80";
  }
});

document.querySelector(".btn1").addEventListener("click", () => {
  if (count % 2 == 0) {
    player_1.textContent = current_player1;
    current_player1 = 0;
    player_1_current.textContent = 0;
  } else {
    player_2.textContent = current_player2;
    current_player2 = 0;
    player_2_current.textContent = 0;
  }
  count++;
});
