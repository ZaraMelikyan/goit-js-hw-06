function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    colorChangeBtn: document.querySelector('.change-color'),
    colorValueSpan: document.querySelector('.color'),
};

refs.colorChangeBtn.addEventListener('click', onColorChangeBtnClick);

function onColorChangeBtnClick(event) {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.colorValueSpan.textContent = getRandomHexColor();
}
