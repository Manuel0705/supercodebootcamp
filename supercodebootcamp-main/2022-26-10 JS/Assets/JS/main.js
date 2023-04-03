// ======================== 1_2 =========================

// function niceWeather(event) {
//     event.preventDefault();
//     const weather = document.getElementById("number-input").value
  

// if (weather >= 0 && weather <= 2) {
//     console.log("schlecht");

// } else if (weather  >= 3 && weather  <= 5) {
//     console.log("okay");

// } else if (weather >= 6 && weather  <= 7) {
//     console.log("gut");

// } else if (weather >= 8 && weather  <= 10) {
//     console.log("super");
// }

// }

// document.write();

// ========================= 2_1 =============================
// 1: Onclick erstellen.
// 2: Werte aus Inputfeld rausziehen.
// 3: Wollen Werte berechnen und dann vergleichen.
// 4: Das Ergebnis im HTML ausspucken.

// function getValue(event) {
//     event.preventDefault();

//    const datum = document.querySelector("#datum").value;
//    console.log(typeof datum);

//     const agePerson1 = document.querySelector("#age1-input").value;
//     console.log(typeof agePerson1);
//     let agePerson2 = document.getElementById("age2-input").value;
//     console.log(typeof agePerson2);
//     let heightPerson1 = document.getElementById("height1-input").value;
//     console.log(typeof heightPerson1);
//     let heightPerson2 = document.getElementById("height2-input").value;
//     console.log(typeof heightPerson2);
    

//     let berechnungPerson1 = agePerson1 * 5 ; heightPerson1;
//     let berechnungPerson2 = agePerson2 * 5 + heightPerson2;
//     let berechnen2 = Number(berechnungPerson1) + Number(heightPerson1);

//     console.log(berechnen2);
// }

// ==============================================================

let output = document.querySelector("#output-text");

function getSize() {
    let getFontSize = document.querySelector(".getSize").value
    output.getElementsByClassName.fontSize = getFontSize + "px";
}

function getFonts() {
    
}





    
