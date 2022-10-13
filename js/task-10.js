function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');

createBtnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();

    const value = '30px';

    box.style.width = value;
    box.style.height = value;

    divRef.appendChild(box);
}

console.log(divRef);

//const createBoxes = amount => {

// return box;
//};

destroyBtnRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    divRef.innerHTML = '';
}

for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.innerHTML = i;

    box.style.backgroundColor = getRandomHexColor();

    const value = '30px';

    box.style.width = value + 10;
    box.style.height = value;

    divRef.appendChild(box);
}

let fragment = document.createDocumentFragment(); // HTML fragment
let amount = 5; // items amount

for (let i = 1; i <= amount; i++) {
    let url = document.createElement('a');
    let span = document.createElement('span');

    span.innerHTML = i;
    url.href = 'seriya-' + i;
    url.appendChild(span);

    fragment.appendChild(url);
}

document.body.appendChild(fragment);
