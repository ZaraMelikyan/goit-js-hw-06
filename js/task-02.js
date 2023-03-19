const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// Получаем ссылку на элемент
const ingredientsListRef = document.querySelector('#ingredients');

// Функция для создания одного элемента
const makeIngredient = ingredient => {
    // Создаем элемент
    const item = document.createElement('li');

    // Добавляем контент элемента
    item.textContent = ingredient;

    // Добавляем класс элемента
    item.classList.add('item');

    return item;
};

// Получаем массив всех элементов в ul
const makeAllIngredients = ingredients.map(makeIngredient);

// Добавляем элементы в Dom
ingredientsListRef.append(...makeAllIngredients);
