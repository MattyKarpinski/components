const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.querySelector('.submit_btn');
const formMain = document.querySelector('.form_main');

formMain.addEventListener("submit", e => {
    e.preventDefault();

    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if(firstNameValue === '') {
        errorFunction(firstName, 'podaj poprawnie imię')
    } 
    else {
        successFunction(firstName)
    }
})

function errorFunction( req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('.comment');
    span.innerText = message;
    req.className.add('error');
    span.className.add('error-text');
}

function successFunction( req) {
    req.className += 'success';
}