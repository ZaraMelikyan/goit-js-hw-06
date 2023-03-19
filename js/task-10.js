// Получаем ссылку на элемент
const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const outputBoxesRef = document.querySelector('#boxes');

// Функция для генерации случайных hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

let boxSize = 30;
const boxStep = 10;

// Хендлер  создания boxes
function onCreateBtn(amount) {
    let boxesMarkup = [];
    amount = inputRef.value;

    for (let i = 0; i < amount; i += 1) {
        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = getRandomHexColor();
        boxEl.style.width = `${boxSize}px`;
        boxEl.style.height = `${boxSize}px`;
        boxesMarkup.push(boxEl);
        boxSize += boxStep;
    }

    outputBoxesRef.append(...boxesMarkup);
}

// Хендлер  удаления boxes
const onDestroyBoxes = () => (outputBoxesRef.innerHTML = '');

// Вешаем слушателя события
createBtnRef.addEventListener('click', onCreateBtn);
destroyBtnRef.addEventListener('click', onDestroyBoxes);
