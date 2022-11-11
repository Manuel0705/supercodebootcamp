// console.log("hi");

// let product = {
//   productName: "Melitta",
//   productPrice: 5,
//   productYear: 2022,
//   productDescription: () => {
//     console.log("Melitta schmeckt seit ${product.productYear}");
//   },
// };
// product.productDescription();

// ===================================================================
// ======================== key-values zusammenrechenen ==============
// let grade = {
//   math: 3,
//   sport: 1,
//   html: 2,
//   css: 2,
//   js: 3,
// };
// let sum = 0;
// for (let i in grade) {
//   console.log(grade[i]);
//   sum += grade[i];
// }
// console.log(sum);

// ====================================================================
// ===================== Übungen Objekte =============================
// ========================= 1_2 =====================================

// let person = {
//   name: "Manu",
//   alter: "42",
//   sagNameAlter: () => {
//     // alert(person.name + " " + person.alter);
//     alert(`${person.name} ${person.alter}`);
//   },
// };

// person.sagNameAlter();

// ========================= 1_4 =====================================

// let unsereHaustiere = [
//   {
//     tiertyp: "Katze",

//     names: ["Gipsy", "Nala", "Dinky"],
//   },
//   {
//     tiertyp: "Hunde",
//     names: ["Knöpfchen", "Pinselchen", "Droopy"],
//   },
// ];

// console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2]);

// console.log(unsereHaustiere[1].names);

// unsereHaustiere[0].names = ["Tao", "Nafia", "Poppy", "Tayfun"];

// console.log(unsereHaustiere[0].names);
// console.log(unsereHaustiere);
// ==================================================================
// ===================== 1_5 ========================================

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

for (let i in unserLager.schrank) {
  console.log(unserLager.schrank["Obere Schublade"].Ordner2);
  for (let i in unserLager) {
    console.log(unserLager.schrank["Untere Schublade"]);
    for (let i in unserLager) {
      console.log(unserLager.schreibtisch.schublade);
    }
  }
}

// ================================================================
