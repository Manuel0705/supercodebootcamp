console.log("hi");

// ==========================  1_1 =============================


// function value() {
// event.preventDefault();
// const output = document.querySelector("h3");
// const value = document.querySelector(".num").value;



// console.log(value);
// output.innerHTML=value*2
// }

// ============================ 1_2 ====================================

function calculAge() {
    event.preventDefault(); // stoppt das unmittelbare zurücksetzen des Eingabefeldes nachdem man die funktion ausführt ( Button )
    const outputData = document.querySelector("h3");
    const age = document.querySelector("#geburtsjahr-id").value;
    outputData.innerHTML = 2022 - age;
}

// ======================================= 1_3 ========================================

// function calcAgeDif() {
//     event.preventDefault();
//     const outputData = document.querySelector("h4");
//     const age1 = document.querySelector(".age1").value;
//     const age2 = document.querySelector(".age2").value;

//     outputData.innerHTML = Math.abs(age1 - age2);
// }

// ========================================== 1_3 Projekt =======================================



// function bääm() {
//     const haEins = ducument.querySelector("h1");

    
// }

// function addBig() {
//     const text = document.querySelector("h1");
//     text.classList.add("big");
// }

// function removeBig() {
//     const text = document.querySelector("h1");
//     text.classList
// }