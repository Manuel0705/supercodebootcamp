// ======================= 1_1 Array sort ========================
// let languages = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "Ruby",
//     "PHP",
//     "C++",
//     "CSS",
//     "C#",
//     "Go",
//     "C",
//     "TypeScript",
//     "Swift"
//   ];

//   languages.sort();
//   console.log(languages);

//   ================== fragen ob das wirklich so gemeint war !=======

// ==================== 1_3 Number sort ======================

// var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
// console.log(numArray1);
// numArray1.sort();
// console.log(numArray1);

// ================= auch nochmal nachfragen ==================

// ================== 1_11 Arrays splice =======================
// Beispiel:
// .splice()
// Erste Parameter: Wo soll hinzugefügt werden?
// Zweite Parameter: Wie viele Elemente sollen gelöscht/überschrieben werden ?
// Dritte/... Parameter: Neue Elemente
// console.log("%c Array Methods .splice()", "color: tomato; background-color: gold;");

// heroes.splice(2, 0, "Wario", "Luigi");
// console.log(heroes);

// // Sonic raus
// heroes.splice(1, 1);
// console.log(heroes);

// // Marzio raus
// heroes.splice(3, 1);
// console.log(heroes);

// // Warzio ersetzt Wario
// heroes.splice(1, 1, "Warzio");
// console.log(heroes);

// let array = [
//   "imageTeilnehmer000supercode.jpg",
//   "imageTeilnehmer001supercode.jpg",
// ];
// array.splice(
//   2,
//   0,
//   "imageTeilnehmer008supercode.jpg",
//   "imageTeilnehmer009supercode.jpg",
//   "imageTeilnehmer010supercode.jpg"
// );
// console.log(array);

// array.splice(
//   6,
//   0,
//   "imageTeilnehmer014supercode.jpg",
//   "imageTeilnehmer015supercode.jpg",
//   "imageTeilnehmer016supercode.jpg",
//   "imageTeilnehmer017supercode.jpg",
//   "imageTeilnehmer018supercode.jpg",
//   "imageTeilnehmer019supercode.jpg"
// );
// console.log(array);

// array.splice(
//   2,
//   0,
//   "imageTeilnehmer002supercode.jpg",
//   "imageTeilnehmer003supercode.jpg",
//   "imageTeilnehmer004supercode.jpg",
//   "imageTeilnehmer005supercode.jpg",
//   "imageTeilnehmer006supercode.jpg",
//   "imageTeilnehmer007supercode.jpg"
// );
// console.log(array);

// array.splice(
//   11,
//   0,
//   "imageTeilnehmer011supercode.jpg",
//   "imageTeilnehmer012supercode.jpg",
//   "imageTeilnehmer013supercode.jpg"
// );
// console.log(array);

// ================= 1_12 Arrays slice ========================

// let array = [
//   "imageTeilnehmer000supercode.jpg",
//   "imageTeilnehmer001supercode.jpg",
//   "imageTeilnehmer002supercode.jpg",
//   "imageTeilnehmer003supercode.jpg",
//   "imageTeilnehmer004supercode.jpg",
//   "imageTeilnehmer005supercode.jpg",
//   "imageTeilnehmer006supercode.jpg",
//   "imageTeilnehmer007supercode.jpg",
//   "imageTeilnehmer008supercode.jpg",
//   "imageTeilnehmer009supercode.jpg",
//   "imageTeilnehmer010supercode.jpg",
//   "imageTeilnehmer011supercode.jpg",
//   "imageTeilnehmer012supercode.jpg",
//   "imageTeilnehmer013supercode.jpg",
//   "imageTeilnehmer014supercode.jpg",
//   "imageTeilnehmer015supercode.jpg",
//   "imageTeilnehmer016supercode.jpg",
//   "imageTeilnehmer017supercode.jpg",
//   "imageTeilnehmer018supercode.jpg",
//   "imageTeilnehmer019supercode.jpg",
// ];

// let copyImg1 = array.slice(7, 15);

// console.log(copyImg1);

// let copyImg2 = array.slice(6, 12);

// console.log(copyImg2);

// =================== 1_1 for Each ==========================

// let getraenke = [
//   `Coca-Cola`,
//   `Apfelsaft`,
//   `Pepsi`,
//   `Traubensaft`,
//   `Sprite`,
//   `Orangensaft`,
//   `Red Bull Energy Drink`,
//   `Fanta`,
// ];

// getraenke.sort();
// console.table(getraenke);

// getraenke.forEach((myDrinks) => {
//   console.log(myDrinks);
//   document.write(myDrinks);
// });

// ================== 1_2 Map =============================

// let getraenke = [
//   "Coca-Cola",
//   "Apfelsaft",
//   "Pepsi",
//   "Traubensaft",
//   "Sprite",
//   "Orangensaft",
//   "Red Bull Energy Drink",
//   "Fanta",
// ];

// let upperDrinks = getraenke.map((x) => {
//   return x.toUpperCase();
// });

// console.log(upperDrinks);

// ======================= 1_3 map ======================

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let array1 = array.map((x) => {
  return x * 2;
});

array1.sort((a, b) => a - b);
console.log(array1);
