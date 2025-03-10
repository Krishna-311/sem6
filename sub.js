document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[type="text"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const feedbackInput = document.querySelector('textarea');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const feedback = feedbackInput.value.trim();
        let isValid = true;

        if (name.length < 2 || /\d/.test(name) || /[^a-zA-Z\s]/.test(name)) {
            isValid = false;
            alert('Name must contain at least 2 characters, no digits, and no symbols.');
        }

        if (!/^\d{10}$/.test(phone)) {
            isValid = false;
            alert('Phone number must be exactly 10 digits.');
        }

        if (feedback === '') {
            isValid = false;
            alert('Feedback cannot be empty.');
        }
        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();
        } else {
            alert('Please fill up all information correctly.');
        }
    });
});