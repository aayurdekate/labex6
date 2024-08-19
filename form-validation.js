// form-validation.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const dobInput = document.getElementById('dob');
    const submitButton = document.getElementById('submit-button');

    // Regular expressions
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Functions for validation
    function validateName() {
        const name = nameInput.value.trim();
        const errorElement = document.getElementById('name-error');
        if (!nameRegex.test(name)) {
            errorElement.textContent = 'Name must be at least 3 alphabetic characters.';
            nameInput.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            nameInput.classList.remove('error');
            nameInput.classList.add('valid');
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const errorElement = document.getElementById('email-error');
        if (!emailRegex.test(email)) {
            errorElement.textContent = 'Invalid email format.';
            emailInput.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            emailInput.classList.remove('error');
            emailInput.classList.add('valid');
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        const errorElement = document.getElementById('password-error');
        if (!passwordRegex.test(password)) {
            errorElement.textContent = 'Password must be at least 8 characters long and include both letters and numbers.';
            passwordInput.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            passwordInput.classList.remove('error');
            passwordInput.classList.add('valid');
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const errorElement = document.getElementById('confirm-password-error');
        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match.';
            confirmPasswordInput.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            confirmPasswordInput.classList.remove('error');
            confirmPasswordInput.classList.add('valid');
            return true;
        }
    }

    function validateDob() {
        const dob = new Date(dobInput.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const errorElement = document.getElementById('dob-error');
        if (isNaN(dob.getTime()) || age < 18) {
            errorElement.textContent = 'You must be at least 18 years old.';
            dobInput.classList.add('error');
            submitButton.disabled = true;
            return false;
        } else {
            errorElement.textContent = '';
            dobInput.classList.remove('error');
            dobInput.classList.add('valid');
            submitButton.disabled = false;
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateDob()) {
            alert('Form submitted successfully!');
        }
    }

    // Event listeners
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('change', validateDob);
    form.addEventListener('submit', handleSubmit);
});
