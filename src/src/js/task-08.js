
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmitLogin);

function onSubmitLogin(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert('Все поля должны быть заполнены')
    } else {
        let user = { email: '', password: '' };
        user.email = email.value;
        user.password = password.value;
        console.log(user);
        event.currentTarget.reset();
    }
}