// console.log("it works");

let counter = 0;
const button = document.querySelector('button');
const container = document.querySelector('.umwickeln');

button.addEventListener('click', () => {
    // console.log(counter);
    let div = document.createElement('div');
    div.textContent = counter;

    // Möglichkeit 1
    // if (counter % 10 == 0) {
    //     div.classList.add('weiss');
    // }

    // div.classList.add('rechteck');

    // Möglichkeit 2
    if (counter % 10 == 0) {
        div.setAttribute('class', 'weiss rechteck');
    } else {
        div.setAttribute('class', 'rechteck');
    }

    container.appendChild(div);
    counter++;
})