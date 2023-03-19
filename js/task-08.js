const formRef = document.querySelector('.login-form');

const onFormSubmit = event => {
    // Отмена перезагрузку страницы после отправки
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    // Проверка заполнение всех строк
    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены!');
        return;
    }

    // Собор всех значений формы(для отправки в back)
    const formData = {
        email,
        password,
    };

    // Очищаем форму
    return formRef.reset();
};

formRef.addEventListener('submit', onFormSubmit);
