// console.log(document.forms);

// let myForm = document.forms.loginForm;
// console.log(myForm);
// console.log(myForm.elements);
// console.log(myForm.elements.username.value);
// console.log(myForm.elements.email.value);
// console.log(myForm.elements.button);

// console.log(document.images);

const liHTMLCollection = document.getElementsByTagName('li');
const liNodelist = document.querySelectorAll('li');

// console.log("%c start1", "color: tomato");
// console.log(liHTMLCollection);
// console.log(liNodelist);
// console.log("%c end1", "color: tomato");

// children

// console.log(document.body.children[0].children);

// document.body.children[0].innerHTML += "<li> Test </li>";
// document.body.children[0].children[1].style.color = "red";

// console.log("%c start2", "color: tomato");
// console.log(liHTMLCollection);
// console.log(liNodelist);
// console.log("%c end2", "color: tomato");

// // firstElementChild || lastElementChild

// console.log(document.body.firstElementChild); //ul
// console.log(document.body.lastElementChild); //script

// // nextElementSibling || previousElementSibling

// console.log(document.body.firstElementChild.children[0].nextElementSibling); //2te li

// console.log(document.body.firstElementChild.children[2].previousElementSibling); //2te li

// =================================================================

console.log("%c start1", "color: tomato");
console.log(liHTMLCollection);
console.log(liNodelist);
console.log("%c end1", "color: tomato");

// createElement
// erstellt ein element deiner wahl
let div = document.createElement('div');
// erstellt text für dein erstelltes element
div.textContent = "Test Div";
// styled dein element
div.style.height = "100px";
div.style.backgroundColor = "red";

// appendChild
// fügt ein element an das ende des body zu
document.body.appendChild(div);

let li = document.createElement('li');
li.textContent = "Create List-Item";

document.body.firstElementChild.appendChild(li);

console.log("%c start2", "color: tomato");
console.log(liHTMLCollection);
console.log(liNodelist);
console.log("%c end2", "color: tomato");

let socialMedia = ['meta', 'tw', 'ig'];

socialMedia.forEach(elt => {
    // console.log(elt)
    let listItem = document.createElement('li');
    listItem.textContent = elt;
    document.body.firstElementChild.appendChild(listItem);
});

console.log("%c start3", "color: tomato");
console.log(liHTMLCollection);
console.log(liNodelist);
console.log("%c end3", "color: tomato");

// setAttribute("attribute", "attribute-inhalt");
let image = document.createElement('img');
image.setAttribute('src', 'https://unsplash.it/200');
image.setAttribute('alt', 'random');
image.setAttribute('class', "random-image");

document.body.appendChild(image);

let imgArr = ['https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2', 'https://unsplash.it/200?0', 'https://unsplash.it/200?1', 'https://unsplash.it/200?2'];

console.log(imgArr.length);

imgArr.forEach((elt, index) => {
    console.log(index);
    let img = document.createElement('img');
    img.setAttribute('src', elt);
    img.setAttribute('alt', 'random');

    if (index % 2 == 0) {
        img.setAttribute('width', '20%');
    }

    document.body.appendChild(img);
})