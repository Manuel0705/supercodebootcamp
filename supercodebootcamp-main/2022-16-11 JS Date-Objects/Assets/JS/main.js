// console.log("test");

// let x = Math.PI;
// console.log(x);

//Math.PI gibt PI zurück (das Verhältnis der Fläche eines Kreises zum Quadrat seines Radius, ungefähr 3,14)

// let y = Math.round(2.5);
// console.log(y);

// Die Math.round()Methode rundet eine Zahl auf die nächste ganze Zahl.

// 2,49 wird abgerundet (2) und 2,5 wird aufgerundet (3).

// ====================== 1_1 new date ========================

// let date1 = new Date();

// let date2 = new Date(1980, 5, 07, 14, 45);
// // console.log(date2);

// let date3 = date1 - date2;
// console.log(date3 / 1000 / 60 / 60 / 24 / 365);
// =============================================================

// let date0 = new Date();
// console.log(date0);

// let date1 = new Date("September 2, 2019 09:00:00");
// let date2 = new Date(0); // Erstes erfasstes Datum seit einführung GMT
// let date3 = new Date(31556908800);
// let date4 = new Date(86400000);
// console.log(date3);

// let output = document.querySelector("div");
// output.innerHTML = `${date0} <br> ${date1} <br> ${date2} <br> ${date3} <br> ${date4}`;

// ==================== 1_2 Date Methods =========================

// let date0 = new Date();
// console.log(date0);

// console.log(date0.getFullYear());
// console.log(date0.getDate());
// console.log(date0.getMinutes());
// console.log(date0.getSeconds());

// let monate = [
//   "Januar",
//   "Februar",
//   "März",
//   "April",
//   "Mai",
//   "Juni",
//   "Juli",
//   "August",
//   "September",
//   "Oktober",
//   "November",
//   "Dezember",
// ];
// console.log(monate[date0.getMonth()]);

// let wochenTag = [
//   "Sonntag",
//   "Montag",
//   "Dienstag",
//   "Mittwoch",
//   "Donnerstag",
//   "Freitag",
//   "Samstag",
// ];

// console.log(wochenTag[date0.getDay()]);

// =================== 1_3 ================================

// let date0 = new Date();
// console.log(date0);

// date0.setDate(24);
// console.log(date0);

// date0.setMonth(2);
// console.log(date0);

// date0.setDate(3);
// console.log(date0);

// let date2 = new Date();
// date2.setDate(46);
// console.log(date2);

// =================== 1_5 ================================

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
// console.log(list);

let myDate = new Date();

let month = myDate.getMonth();

console.log(list[month]); //aktueller Monat
console.log(list);
console.log(month);
