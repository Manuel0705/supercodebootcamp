// ================= Window object ================================
// ================== window history =============================
// ================= JS Timing events =============================

// console.log("test");

// ================= 1_1 setTimeout  ==================

// let verzögerung = () => {
//   console.log("soll mit verzögerung kommen");
// };

// setTimeout(verzögerung, 2000);

// ================= 1_1 setInterval ====================

// let blinkeBlinke = () => {
//   console.log(new Date());
// };

// setInterval(blinkeBlinke, 2000);

// ====================================================
// let count = 11;
// let ergebnisVorschau = () => {
//   count--;
//   console.log(count);
//   if (count == 1) {
//     console.log("null angekommen");
//     clearInterval(interval);
//   }
// };

// const interval = setInterval(ergebnisVorschau, 1000);

// =========================1_2=======================
let count = 100;
const zahl = document.querySelector(".zeit");
const btn = document.querySelector("#btn");
let myClear;

btn.addEventListener("click", () => {
  console.log("test");
  let myCount = () => {
    count--;
    zahl.innerHTML = `${count}%`;
    if (count == 0) {
      clearInterval(myClear);
      count = 100;
    }
  };
  myClear = setInterval(myCount, 100);
});

// =========================2_1=======================

// let timer = 11;
// let counter = document.querySelector("#count");
// let nachricht = document.querySelector(".message");

// const countdown = () => {
//   timer--;
//   counter.innerHTML = timer;
//   if (timer == 0) {
//     clearInterval(countdownInterval);
//     nachricht.style.display = "none";
//   }
// };
// let countdownInterval = setInterval(countdown, 1000);

// =========================3_2=======================
