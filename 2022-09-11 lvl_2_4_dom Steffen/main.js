const button = document.getElementById('button');
const bgColor = document.getElementById('farbeAuswahlen');

button.addEventListener('click', (event) => {
    event.preventDefault();
    // Möglichlkeit 1
    // let bodyBgColor = bgColor.value.split(" ");
    // document.body.style.backgroundColor = bodyBgColor.join("");

    // Möglichkeit 2
    console.log(bgColor.selectedIndex);

    switch (bgColor.selectedIndex) {
        case 0:
            document.body.style.backgroundColor = 'mediumorchid';
            break;
        case 1:
            document.body.style.backgroundColor = 'mintcream';
            break;
        case 2:
            document.body.style.backgroundColor = 'dodgerblue';
            break;
    }
})