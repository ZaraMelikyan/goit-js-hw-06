// Получаем ссылку на элемент
const inputRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

// Вешаем слушателя события и Handler для изменение font-size
inputRef.addEventListener('input', () => {
    textSpanRef.style.fontSize = `${inputRef.value}px`;
});
