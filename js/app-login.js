// Caching elements to variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password = document.getElementById('password');
const viewPassword = document.querySelector('.icon-eye');
const capText = document.getElementById("cap-text");

// Show error message
const showError = (input, message) => {
    input.className = 'form-control error';
    const formGroup = input.parentElement.closest('.form-group');
    formGroup.querySelector('small').innerText = message;
};

const showPassword = (input, password) => {
    const formGroup = password.parentElement.closest('.form-group');
    if (formGroup.querySelector('input').type === 'password') {
        password.className = 'fa fa-eye-slash icon-eye position-absolute';
        formGroup.querySelector('input').type = 'text';
        input.focus()
    } else {
        password.className = 'fa fa-eye icon-eye position-absolute';
        formGroup.querySelector('input').type = 'password';
    }
};
const validateEmail = (emailValid) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValidTest = re.test(String(emailValid).toLowerCase());
    if (emailValidTest === true) {
        email.className = 'form-control success';
    } else {
        showError(email, 'Email invalid');
    }

}
function validatePassword(passwordValid) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const regex = /(?:[A-Za-z].*?\d|\d.*?[A-Za-z])/;
    let passwordValidTest = regex.test(String(passwordValid.value));
    console.log(passwordValidTest);
    if (passwordValid.value === '') {
        showError(passwordValid, 'Password cannot be blank');
    // } else if (passwordValid.value.length < 6) {
    //     showError(passwordValid, 'Password cannot be less than 8');
    } else if (passwordValidTest !== true) {
        showError(passwordValid, 'Password should contain atleast a number, a character and letter');
    } else {
        passwordValid.className = 'form-control success';
    }

}


    viewPassword.addEventListener('click', function (event) {
        let passwordInput = viewPassword.closest('.form-group').querySelector('input');
        showPassword(passwordInput, viewPassword);
    })
function requestMessage() {
    console.log('please work');
    let checkEmail = email.classList.contains('success');
    let checkPw1 = password1.classList.contains('success');

        if (checkEmail === checkPw1) {
                if (checkEmail === true) {
                    location.href = 'https://vee-ecommerce-dashboard.netlify.app';
                    email.value = ''
                    password1.value = ''
                }
            
        }
}
form.addEventListener('submit', function (event) {   
    event.preventDefault();
    if (email.value === '') {
        showError(email, 'Email cannot be blank');
    } else {
        validateEmail(email.value);
    }
        validatePassword(password1);
    
    requestMessage()

});