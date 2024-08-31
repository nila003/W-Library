document.getElementById('signupForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('num').value;
    var password = document.getElementById('pwd').value;
    var username = document.getElementById('username').value;

    let emailregEx= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var phoneregEx = /^(\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{10})$/;
    var pwdregEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    var formValid = true;

    if (username.trim() === '') {
        document.getElementById('username').classList.add('is-invalid');
        formValid = false;
    } else {
        document.getElementById('username').classList.remove('is-invalid');
    }

    if (email.trim()=='' || !emailPattern.test(email)) {
        event.preventDefault();
        document.getElementById('email').classList.add('is-invalid');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    if (phone.trim()==''|| !phonePattern.test(phone)) {
        event.preventDefault();
        document.getElementById('num').classList.add('is-invalid');
    } else {
        document.getElementById('num').classList.remove('is-invalid');
    }

    // Validate the password
    if (password.trim()==''|| !passwordPattern.test(password)) {
        event.preventDefault();
        document.getElementById('pwd').classList.add('is-invalid');
    } else {
        document.getElementById('pwd').classList.remove('is-invalid');
    }
});

document.getElementById('pwd').addEventListener('input', function() {
    var password = this.value;
    var strengthText = '';
    var strengthClass = '';

    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
            strengthText = 'Strong';
            strengthClass = 'strength-strong';
        } else if ((/[A-Z]/.test(password) && /[a-z]/.test(password)) || (/[a-z]/.test(password) && /\d/.test(password)) || (/[A-Z]/.test(password) && /\d/.test(password))) {
            strengthText = 'Medium';
            strengthClass = 'strength-medium';
        } else {
            strengthText = 'Poor';
            strengthClass = 'strength-poor';
        }
    } else {
        strengthText = 'Poor';
        strengthClass = 'strength-poor';
    }

    var strengthIndicator = document.getElementById('passwordStrength');
    strengthIndicator.textContent = strengthText;
    strengthIndicator.className = 'password-strength ' + strengthClass;
});