// while loop
// kann man mit if syntax vergleichen
// solange condition true wird der loop ausgeführt
// while loop kann das gleiche/selbe wie der for loop
let arr = ["element 1", "element 2", "element 3"]
let num = 0;

while (num < arr.length) {
    console.log(arr[num]);
    num++
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// do while loop
// wird immer mindestens einmal ausgeführt und zum schluss wird überprüft ob der do while loop nochmal ausgeführt wird
let num2 = 6;

do {
    console.log("check");
    num2++
} while (num2 < 5);

