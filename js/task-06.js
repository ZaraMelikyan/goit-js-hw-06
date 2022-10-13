const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', OnInputBlur);

function OnInputBlur(event) {
    const validLength = Number(event.currentTarget.dataset.length);

    if (event.currentTarget.value.length === validLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
        return;
    }

    if (event.currentTarget.value === '') {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
        return;
    }

    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
}
