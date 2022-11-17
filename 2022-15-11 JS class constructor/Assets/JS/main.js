// console.log("test");

// =============== 1_1 class constructor =========================

// Aufgabenstellung

// Regulärer Ball Super Ball

// Erstelle eine Klasse Ball.
// Ball-Objekt soll ein Argument "ballType" akzeptieren,
// Wenn keine Argumente angegeben werden, sollten Ball-Objekt mit dem "ballType" "regular" initialisiert werden.

// Code zum Testen:
// ball1 = new Ball();
// ball2 = new Ball("super");

// console.log(ball1.ballType);	//=> "regular"
// console.log(ball2.ballType);	//=> "super"

// class Ball {
//   constructor(ballType) {
//     if (ballType != undefined) {
//       this.ballType = ballType;
//     } else {
//       this.ballType = "regular";
//     }
//   }
// }

//Möglichkeit 2

// class Ball {
//   constructor(ballType = "regular") {
//     this.ballType = ballType;
//   }
// }

// let ball1 = new Ball();
// let ball2 = new Ball("super");
// console.log(ball1.ballType); //=> "regular"
// console.log(ball2.ballType); //=> "super"

// =============== 1_2 class constructor =========================

// class Person {
//   constructor(vorName, alter) {
//     this.vorName = vorName;
//     this.alter = alter;
//   }
//   info() {
//     console.log(`${this.vorName} is ${this.alter} years old.`);
//   }
// }

// let person1 = new Person("Manu", 42);

// person1.info();

// console.log(person1.info);

// =============== 1_3 class constructor =========================

const vorName = document.querySelector("#name");
const alter = document.querySelector("#age");
const checkBox = document.querySelector("#examCheck").checked;
const button = document.querySelector("#button");
const output = document.querySelector("#result");


class Person {
    constructor(vorName, alter){
        this.vorName = vorName;
        this.alter = alter;
    }
    info() {
        ${this.vorName} is ${this.alter} years old.;
    }
}
button.addEventListener(click, () => {
    event.preventDefault();
let person1 = new Person (${vorName}, ${alter});
if (checkBox == true) {

}
person1.info();

console.log(vorName.value);
console.log(alter.value);
});








// class Person {
//   constructor(vorName, alter) {
//     this.vorName = vorName;
//     this.alter = alter;
//   }
//   info() {
//     console.log(`${this.vorName} is ${this.alter} years old.`);
//   }
// }

// let person1 = new Person("Manu", 42);

// const name = person1.getElementById("Name").value;

// const age = person1.getElementById("Age").value;
// const check = person1.getElementById("check").value;
// const personErstellen = person1.getElementById("personErstellen").value;

// person1.info();
// person1.info.document.write("<li>"); //??

// console.log(person1.info);
