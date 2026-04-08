function validateForm() {

    // Step 1 — Get what the user typed
    const name            = document.getElementById('name').value.trim();
    const email           = document.getElementById('email').value.trim();
    const grade           = document.getElementById('grade').value;
    const password        = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Step 2 — Clear old error messages
    document.getElementById('nameError').textContent     = '';
    document.getElementById('emailError').textContent    = '';
    document.getElementById('gradeError').textContent    = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmError').textContent  = '';
    document.getElementById('successMsg').textContent    = '';

    // Step 3 — Check each field
    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = '⚠ Please enter your name';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = '⚠ Please enter your email';
        isValid = false;
    }

    if (grade === '') {
        document.getElementById('gradeError').textContent = '⚠ Please select your grade';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = '⚠ Please enter a password';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = '⚠ Password must be at least 6 characters';
        isValid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmError').textContent = '⚠ Please confirm your password';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmError').textContent = '⚠ Passwords do not match';
        isValid = false;
    }

    // Step 4 — If everything is correct, show success
    if (isValid) {
        document.getElementById('successMsg').textContent = '✅ Account created successfully! Redirecting...';

        // Redirect to login page after 2 seconds
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);
    }
}