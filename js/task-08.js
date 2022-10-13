const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    console.log(event.currentTarget.elements);

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены!');
        return;
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    return formRef.reset();
}
