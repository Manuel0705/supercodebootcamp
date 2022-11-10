// Aufgabenstellung


// Schreibe wieder eine kleine App, die die Hintergrundfarbe ändert.
// Schreibe 3 Funktionen:
// Ändere die Hintergrundfarbe, wenn auf einen Button 
// geklickt wird.
// Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.
// konvertiere Dezimal zu Hex.
// Assets:
// let count = 0; // global variable
// HTML CSS Code befindet sich im Kommentar

let count = 0;
let demo = document.getElementById('demo');
let red = document.getElementById('rot');
let green = document.getElementById('grun');
let blue = document.getElementById('blau');

const changeBackground = (color) => {
    // console.log(color);
    document.body.style.backgroundColor = color;
    count++
    demo.innerHTML = `Du hast die Farbe schon ${count} geändert`;
}

const changeHandle = () => {
    // convert decimal to hex
    let redToHex = Number(red.value).toString(16);
    let greenToHex = Number(green.value).toString(16);
    let blueToHex = Number(blue.value).toString(16);
    let completeHex = "#" + redToHex + greenToHex + blueToHex
    console.log(completeHex);

    // get rgb color
    let rgb = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    console.log(rgb);
    document.body.style.backgroundColor = rgb;

    demo.innerHTML = rgb + ' = ' + completeHex;
}

// schöne farbe --> rgb(63, 67, 38)


