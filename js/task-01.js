// Получаем ссылку на элемент
const itemsRef = document.querySelectorAll('.item');

//вывод в консоль количество категорий
console.log('Number of categories: ', itemsRef.length);

itemsRef.forEach(item => {
    //вывод в консоль текст заголовка элемента
    console.log('Category: ', item.firstElementChild.textContent);

    //вывод в консоль количество элементов в категории
    console.log('Elements: ', item.lastElementChild.children.length);
});
