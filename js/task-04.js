// Получаем ссылки на элементы
const clickCounterSpanRef = document.querySelector('#value');
const subtractBtnRef = clickCounterSpanRef.previousElementSibling;
const addBtnRef = clickCounterSpanRef.nextElementSibling;

// Вешаем слушателя события и Handler изменения текста span на +1
addBtnRef.addEventListener(
    'click',
    e =>
        (clickCounterSpanRef.textContent =
            Number(clickCounterSpanRef.textContent) + 1)
);

// Вешаем слушателя события и Handler изменения текста span на -1
subtractBtnRef.addEventListener(
    'click',
    e => (clickCounterSpanRef.textContent -= 1)
);
