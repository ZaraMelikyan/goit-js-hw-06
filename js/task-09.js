// Получаем ссылки на элементы
const changeColorDivRef = document.querySelector('.widget');
const changeColorBtnRef = changeColorDivRef.lastElementChild;
const colorValueSpanRef = changeColorDivRef.firstElementChild;

// Handler изменения инлайн цвета body случайным цветом и ввыводом цвета в span
const onChangeColorBtnClick = e => {
    document.body.style.backgroundColor = getRandomHexColor();
    colorValueSpanRef.textContent = `Background color: ${document.body.style.backgroundColor}`;
};

// Функция для генерации случайных hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// Вешаем слушателя события
changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);
