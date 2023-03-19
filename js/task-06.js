// Получаем ссылку на элемент
const inputRef = document.querySelector('#validation-input');

// Хендлер проверki длины значения inputa
const onValidationInputBlur = () => {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        return inputRef.classList.add('valid');
    }
    inputRef.classList.remove('valid');
    return inputRef.classList.add('invalid');
};

// Вешаем слушателя события
inputRef.addEventListener('blur', onValidationInputBlur);
