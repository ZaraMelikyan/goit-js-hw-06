// Получаем ссылки на элементы
const inputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

// Записываем в span значение input с проверкой на ввод
const onNameInput = e => {
    if (e.currentTarget.value === '') {
        textOutputRef.textContent = 'Anonymous';
        return;
    }

    return (textOutputRef.textContent = e.currentTarget.value);
};

// Вешаем слушателя события
inputRef.addEventListener('input', onNameInput);
