// Bisher haben wir Variablen und Werte so gespeichert

// let gericht1 = "Pfannkuchen"
// const gericht2 = "Döner"
// let gericht3 = "Pizza"

// Arrays
// Mit Arrays können wir alle Gericht als einen Datensatz speichern, dabei spielt der Datentyp keine Rolle
// Arrays werden immer mit einem [] Klammerpaar angegeben
// PS: ein normales Klammerpaar funktioniert nicht, weil () eine funktion initiiert/ funktions aufruf

const elvirasLieblingsGerichte = ["Pfannkuchen", "Döner", "Pizza", true, 2020];
// console.log(elvirasLieblingsGerichte);
// console.log(elvirasLieblingsGerichte[3]);

// INDEX
// Über den index kann ich ein einzelnes Element aus unserem Array ansprechen/wiedergeben
// console.log(elvirasLieblingsGerichte[0]);
// console.log(elvirasLieblingsGerichte[1]);
// console.log(elvirasLieblingsGerichte[2]);

// console.log(elvirasLieblingsGerichte.indexOf("Pizza")); // 2
// console.log(elvirasLieblingsGerichte.indexOf("Piiza")); // -1 = element nicht gefunden

// console.log(elvirasLieblingsGerichte);

// Über den Index kann man auch einzelne Elemente verändern
elvirasLieblingsGerichte[3] = "Burger";

// console.log(elvirasLieblingsGerichte);
// console.log(elvirasLieblingsGerichte[3]);

// .length
// Gibt die Länge eines Arrays zurück, als Number
// console.log(elvirasLieblingsGerichte.length);

// Übung
// Bitte deklariert eine Variable mit dem Namen "superTrainer"
// Dieser Variable weißt ihr ein Array zu mit den Namen -> Franzi, Manuel, Jannik, Marzio, Steffen

// Danach tauscht ihr Steffen durch Julia

let superTrainer = ["Franzi", "Manuel", "Steffen", "Jannik", "Marzio"];

// console.log(superTrainer);

// // Statische Möglichkeit 
// superTrainer[2] = "Julia"

// SuperElmins super dynamische Möglichkeit
// console.log(superTrainer.indexOf("Steffen")); // 2
// Mit indexOf wird unser immer der aktuelle index von "steffen" angezeigt, egal wo er steht (automatische anpassung)
// superTrainer[superTrainer.indexOf("Steffen")] = "Julia"

console.log("%c -------pop-------", "color: tomato")
// Array Method .pop()
// Die pop Methode entfernt das letzte Elemenet in einem Array und gibt den Wert, des gelöschten Elements zurück

let popSuperTrainer = superTrainer.pop();
console.log(popSuperTrainer); // Marzio
console.log(superTrainer);

let popSuperTrainer2 = superTrainer.pop();
console.log(popSuperTrainer2); // Jannik
console.log(superTrainer);

console.log("%c -------push-------", "color: tomato")
// Array Method .push()
// Die push Methode fügt an der letzten Stelle ein Element hinzu und gibt die neue length zurück

let pushSuperTrainer = superTrainer.push("Julia");
console.log(pushSuperTrainer); // 4
console.log(superTrainer);

console.log("%c -------shift-------", "color: tomato")
// Array Method .shift()
// Die shift Methode entfernt das erste Element in einem Array und gibt den Wert des Elementes wieder

let shiftSuperTrainer = superTrainer.shift();
console.log(shiftSuperTrainer); //Franzi
console.log(superTrainer);

console.log("%c -------unshift-------", "color: tomato");

// Array Method .unshift()
// Die unshift Methode fügt ein neues Element am Anfang hinzu und gibt die neue length von unserem Array zurück

let unshiftSuperTrainer = superTrainer.unshift("Marzio");
console.log(unshiftSuperTrainer); // 4
console.log(superTrainer);