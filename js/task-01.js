const itemsOfCategoriesRef = document.querySelectorAll('.item');
console.log('Number of categories: ', itemsOfCategoriesRef.length);

itemsOfCategoriesRef.forEach(item => {
    const titleOfCategoryRef = item.firstElementChild;
    const elementsOfCategoryRef = item.querySelectorAll('li');

    console.log('Category: ', titleOfCategoryRef.textContent);
    console.log('Elements: ', elementsOfCategoryRef.length);
});
