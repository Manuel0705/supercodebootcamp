// DOM = Document Object Model

// DOM finding
let myDiv = document.getElementById('my_div');
//console.log(myDiv);

// querySelector --> selektiert immer nur das erste element was gefunden wird
let firstH2 = document.querySelector('h2');
//console.log(firstH2);

// ===============================================

// HTMLCollection oder NodeList
// Beide sind array like

// HTMLCollection
// TagName
let div = document.getElementsByTagName('div');
//console.log(div);

// ClassName
let superDiv = document.getElementsByClassName('super_div');
//console.log(superDiv);

// Name --> gibt NodeList zurück
let vorname = document.getElementsByName('vorname');
//console.log(vorname);

// querySelectorAll --> gibt NodeList zurück
let allH2 = document.querySelectorAll('section h2');
//console.log(allH2);

// Events

// Variante 1
// myDiv.addEventListener('click', () => {
//     myDiv.style.backgroundColor = 'tomato';
// })

// Variante 2
// myDiv.addEventListener('click', function () {
//     myDiv.style.backgroundColor = 'tomato';
// })

const myFunction = () => {
    console.log("Hello World");
    for (let i = 3; i < div.length; i++) {
        console.log(i)
        div[i].style.backgroundColor = 'yellow';
    }
    // div[0].style.backgroundColor = 'yellow';
    // div[3].style.color = "purple";
}

// Variante 3
myDiv.addEventListener('click', myFunction);

// forEach geht nur auf einem Array;
// div.forEach((elt) => console.log(elt));

// mouseover
// document.body.addEventListener('mouseover', (event) => {
//     console.log(event)
//     console.log("Hi")
// })

// mousemove
// document.body.addEventListener('mousemove', (e) => {
//     // console.log(e);
//     console.log(e.screenX);
//     console.log(e.screenY);
//     let red = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);

//     document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
// })

document.body.addEventListener('keydown', (e) => {
    console.log(e);
    console.log(e.key);
    switch (e.key) {
        case 'm':
            console.log("Manu");
            document.body.style.backgroundColor = "purple";
            break;
        case 'e':
            console.log('Elvira');
            document.body.style.backgroundColor = "orange";
    }
})