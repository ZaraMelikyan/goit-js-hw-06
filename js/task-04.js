const refs = {
    addBtn: document.querySelector('[data-action="increment"]'),
    subBtn: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
};

let counterValue = 0;

refs.addBtn.addEventListener('click', onAddBtnClick);
refs.subBtn.addEventListener('click', onSubBtnClick);

function onAddBtnClick(event) {
    refs.counter.textContent = counterValue += 1;
}

function onSubBtnClick(event) {
    refs.counter.textContent = counterValue -= 1;
}
