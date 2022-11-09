let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

const inputNumber = document.querySelector('#inputNumber');
const btn = document.getElementById('btn');
const output = document.querySelector('#output');

btn.addEventListener('click', () => {
    output.innerHTML = "";

    // Möglichkeit 1
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length === Number(inputNumber.value)) {
    //         output.innerHTML += `<p> ${words[i]} </p>`;
    //     }
    // }

    // Möglichkeit 2
    // const filterArr = words.filter((elt) => elt.length == Number(inputNumber.value));
    // output.innerHTML += `<p> ${filterArr.join("<p></p>")} </p>`;

    // Möglichkeit 3
    words.forEach((elt) => {
        if (elt.length === Number(inputNumber.value)) {
            output.innerHTML += `<p> ${elt} </p>`;
        }
    })
})