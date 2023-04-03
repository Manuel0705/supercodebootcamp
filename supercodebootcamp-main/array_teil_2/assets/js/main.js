//              Arrays
// ===================================
//          Wiederholung Start
// ===================================

let heroes = ["Link", "Sonic", "Marzio", "Pikachu"];

// // Welchen index hat Sonic ?
// console.log(heroes.indexOf("Sonic")); // 1

// // Wie lang ist das Array ?
// console.log(heroes.length); // 4

// // Wie kann ich ein Element zum Ende hinzufügen ?
// heroes.push("Donkey Kong");
// console.log(heroes);

// // Wie kann ich ein Element am Anfang hinzufügen ?
// heroes.unshift("Peach");
// console.log(heroes);

// // Wie kann ich ein Element am Ende entfernen ?
// heroes.pop();
// console.log(heroes);

// // Wie kann ich ein Element am Anfang entfernen ?
// heroes.shift();
// console.log(heroes);

// ===================================
//          Wiederholung Ende
// ===================================

// Array Methods Part 2
console.log("%c Array Methods Part 2", "color: tomato; background-color: gold;");

console.log(heroes);

// .splice()
// Erste Parameter: Wo soll hinzugefügt werden?
// Zweite Parameter: Wie viele Elemente sollen gelöscht/überschrieben werden ?
// Dritte/... Parameter: Neue Elemente
console.log("%c Array Methods .splice()", "color: tomato; background-color: gold;");

heroes.splice(2, 0, "Wario", "Luigi");
console.log(heroes);

// Sonic raus
heroes.splice(1, 1);
console.log(heroes);

// Marzio raus
heroes.splice(3, 1);
console.log(heroes);

// Warzio ersetzt Wario
heroes.splice(1, 1, "Warzio");
console.log(heroes);

// Array Method .slice()
// Mit .slice() können wir ein Teil eines Array ausschneiden und geben ein neues Array zurück
console.log("%c Array Methods .slice()", "color: tomato; background-color: gold;");

// Erster Parameter: Start
// Zweiter Parameter: Ende (opitional)
let newHeroes = heroes.slice(1, 4);
console.log(newHeroes);

// WICHTIG: slice verändert das ursprungs-array nicht!
console.log(heroes);

let otherHeroes = heroes.slice(1);
console.log(otherHeroes);

// ========================
//  Exkurs string.slice()
// ========================

// let myTxt = "Hallo Welt!";
// let myTxtSlice = myTxt.slice(3, 5);

// console.log(myTxt);
// console.log(myTxtSlice);

// ========================
//  Exkurs string.slice()
// ========================

// Array Method .sort()
// Mit .sort() können wir sortieren
console.log("%c Array Methods .sort()", "color: tomato; background-color: gold;");

let numbers1 = [3, 5, 6, 1, 2, 9];
console.log(numbers1);
numbers1.sort();
console.log(numbers1);

let strings = ["B", "D", "A", "C"];
strings.sort();
console.log(strings);

// ÜBUNG bitte sortiert das Array richtig!
let numbers2 = [10, 2, 100, 34, 111, 20];
numbers2.sort();
console.log(numbers2);

// .sort() mit callback funktion (a,b) => vergleich die zahlen und sortiert richtig.
numbers2.sort((a, b) => a - b);
console.log(numbers2);

// Array Method .reverse()
// mit .reverse() können wir ein array umkehren
console.log("%c Array Methods .reverse()", "color: tomato; background-color: gold;");

numbers2.reverse();
console.log(numbers2);

// ========================
//      FOREACH()
// ========================

// forEach()
// forEach() ist einen schleife die durch jedes element des arrays geht und dieses dann ausgibt.
console.log("%c Array Methods .forEach()", "color: tomato; background-color: gold;");

let games = ["World of Warcraft", "Gothic", "Age of Empires 2"];

console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games); // gibt gesamtes array zurück

games.forEach((pusteblume) => {
    console.log(pusteblume);
});

let images = ["https://www.unsplash.it/200?1", "https://www.unsplash.it/200?2", "https://www.unsplash.it/200?3", "https://www.unsplash.it/200?4", "https://www.unsplash.it/200?5", "https://www.unsplash.it/200?6", "https://www.unsplash.it/200?7", "https://www.unsplash.it/200?8", "https://www.unsplash.it/200?9", "https://www.unsplash.it/200?10"];

const bilder = document.querySelector("#bilder");
// console.log(bilder);

images.forEach((elt, index) => {
    console.log(elt);
    console.log(index);
    // bilder.innerHTML += `<img src="${elt}" alt="random">`
})

// .map()
// .map() geht durch jedes element des arrays und gibt ein neues array zurück
// map verändert das ursprungliche array NICHT!
console.log("%c Array Methods .map()", "color: tomato; background-color: gold;");

let numbers3 = [10, 5, 2, 4];
console.log(numbers3);

let numbers4 = numbers3.map((x) => {
    return x * 2;
})

console.log(numbers4);