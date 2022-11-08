// ========================== Loops ===============================

// for (let i = 1; i <= 10; i++) {
//   console.log("helloWorld" + i);
// }

// let sum = 0;
// for (let i = 1; 1 <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 0; i < 5; i++) {
//   console.log("********");
// }

// let stars = ``;

// for (let i = 0; i < 6; i++) {
//   stars += `*`;
//   console.log(stars);
// }

// for (let i = 5; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 50; i > 45; i--) {
//   console.log(i);
// }

// ====================== Loops in Loops ========================

// for (let i = 0; i < 3; i++) {
//   let display = "";
//   for (let j = 0; j < 29; j++) {
//     display += "*";
//   }
//   console.log(display);
// }

// ==============================================================
// ================ Loops über array laufen lassen ==============

// let numbers = [2, 3, 4, 5, 6];

// for (let i of numbers) {
//   console.log(i);
// }

// let text = "text";
// for (let e of text) {
//   console.log(e);
// }
// ========================= for =========================
// let arr = [10, 20, 30];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// ======================== for of ========================

// ======================= forEach =======================

// =======================================================

// =================== Kursaufgaben ======================
// ===================== 1_1 =============================

// for (let i = 1; i <= 10; i++) {
//   console.log("helloWorld" + " " + i);
// }

// ===================== 1_2 =============================

// let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 11; i++) {
//   numArray.push();
// }

// console.log(numArray); // ändert nix

// ==================== 1_4 =============================

// let names = [
//   "Freddy",
//   "Steffen",
//   "Finn",
//   "Julia",
//   "Franzi",
//   "Christian",
//   "Sergio",
// ];

// let text = "";
// for (let i = 0; i < names.length; ) {
//   text += names[i] + "br";

//   console.log(names);
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);

// }

// ==================== 1_9 ==============================
// ////////////// nicht schön, aber funtioniert ===========
// let words = [
//   "hallo",
//   "Auto",
//   "Waschmaschine",
//   "Schrank",
//   "Katze",
//   "Beispiel",
//   "Eltern",
//   "Fenster",
//   "Geburtstag",
//   "Himmel",
//   "schwimmen",
//   "Zeitung",
// ];

// const textInput = document.getElementById("text");
// const btnInput = document.getElementById("btn");
// const output = document.getElementById("output");

// btnInput.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(Number(textInput.value));

//   const filter = words.filter(
//     (words) => words.length == Number(textInput.value)
//   );

//   output.innerHTML = filter;
// });
// ===============================================================
// let text = "";
// for (let i = 0; i < words.length; i++) {
//   text += words[i];

//   console.log(words);
// }

// ==================== 2_1 ==============================
// console.log("test");

// const = imageArray ["image"] => "" + Number;

// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   if (i < 10) {
//     arr.push("image_00" + i + ".jpg");
//   } else if (i >= 10 && i < 100) {
//     arr.push("image_0" + i + ".jpg");
//   } else if (i >= 100) {
//     arr.push("image_" + i + ".jpg");
//   }
// }
// console.table(arr);

// ================================================================
// ======================= 2_2 ====================================

let words = ["Lp"];

const textInput = document.getElementById("text");
const btnInput = document.getElementById("btn");
const output = document.getElementById("output");

btnInput.addEventListener(
  "click",
  (event) => {
    // event.preventDefault();
    // console.log(Number(textInput.value));

    // function loop(event) {
    //   event.preventDefault();
    let bäm = "";

    for (let i = 0; i < textInput.value; i++) {
      bäm += "o";
    }
    output.innerHTML = "L" + bäm + "p";
  }
  // const join = words.join((words) => words.length == Number(textInput.value));
  // let adLetter = words.split(" ").join("o");
  // console.log(words);
);

// ===============================================================
