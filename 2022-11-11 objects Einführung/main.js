// console.log("it works");

// Objects
// key --> eigenschaft
// value --> wert
// key : value

let phone = {
    marke: 'apple',
    model: 'iphone 437 max ultra',
    color: 'black',
    speicher: '6 petabyte',
    camera: '64 mrd pixel',
    display: ['7 zoll', '8k'],
    price: 4999,
    wifi: true
}

// Accessing Object
console.log(phone);

// value object
console.log(phone.model);
console.log(phone.display[1]);

// reassign value object
console.log(phone.wifi);
phone.wifi = false;
console.log(phone.wifi);

// add key and value object
phone.bluetooth = true;
console.log(phone);

// delete key and value object
delete phone.color;
console.log(phone);

// methods in objects
let user = {
    userName: 'Batman',
    email: 'batman@gotham.gt',
    film: ["dark knight", "begins"],
    logIn: () => {
        console.log('%c arrow function', 'color: tomato;');
        // this in arrow function refers to global window object
        console.log(user.userName);
        console.log('batman is logged in');
    },
    logOut: function () {
        console.log('%c normal function', 'color: tomato;');
        console.log(user.userName); // --> funktioniert
        // this in function method refers to the object
        // console.log(this.userName);
        console.log('batman is logged out');
    }
}

user.logIn();
user.logOut();

// this
// outside an object: window object
// inside an object: refers to the object
// console.log(this.userName); --> undefined

// object product
// productName
// productPrice
// productYear
// productDescription ()
// in der description ein console.log mit einer beschreibung die auf die anderen keys im object zugreift

let product = {
    productName: 'Gummilatschen',
    productYear: 1976,
    productPrice: 199,
    productDescription: () => {
        console.log(`Heute haben wir Bernie's super ${product.productName} aus dem Jahre ${product.productYear} zu einem Spotpreis von ${product.productPrice}€.`)
    }
}

product.productDescription();

console.log('%clooooooops object', 'color: tomato')
// loops object
// for in

let newCar = {
    model: 'kia',
    year: 2022,
    color: 'deep forest green'
}

for (let i in newCar) {
    console.log(i, newCar[i]);
    // console.log(newCar[i])
}

let grade = {
    math: 3,
    sport: 1,
    html: 2,
    css: 2,
    js: 3
}

// sum of all grades
let sum = 0;
for (let pusteblume in grade) {
    // console.log(grade[j]);
    sum += grade[pusteblume];
}
console.log(sum);

// Array of all keys from Object
let keyArr = Object.keys(grade);
console.log(keyArr);

// Array of all values from Object
let valueArr = Object.values(grade);
console.log(valueArr);

// Array of all keys and values from Object
let entriesArr = Object.entries(grade);
console.log(entriesArr);

// object in object
let author = {
    firstName: 'Sebastian',
    lastName: 'Fitzek',
    book: {
        nameBook: 'Playlist',
        likes: 2000,
        price: {
            ebook: {
                euro: 15,
                '$': 19.99
            },
            hardcover: {
                euro: 29.99,
                '$': 34.99
            },
            paperback: {
                euro: 20,
                $: 24.99
            }
        }
    }
}

console.log(author.book.nameBook);
console.log(author.book.price.hardcover.euro);
console.log(author.book.price.hardcover['$']);
console.log(author.book.price.paperback.$);

// object in array

let userArr = [
    {
        user: "Bruce",
        hero: "Hulk"
    },
    {
        user: "Tony",
        hero: "Ironman"
    },
    {
        user: "Steven",
        hero: "Captian America"
    }
];

console.log(userArr);

userArr.forEach((elt) => {
    console.log(elt.hero);
})