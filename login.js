function validateLogin() {

    // Step 1 — Get what user typed
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Step 2 — Clear old error messages
    document.getElementById('emailError').textContent    = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMsg').textContent    = '';

    // Step 3 — Check each field
    let isValid = true;

    if (email === '') {
        document.getElementById('emailError').textContent = '⚠ Please enter your email';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = '⚠ Please enter your password';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = '⚠ Password must be at least 6 characters';
        isValid = false;
    }

    // Step 4 — If everything is correct show success
    if (isValid) {
        document.getElementById('successMsg').textContent = '✅ Login successful! Redirecting...';

        // Redirect to homepage after 2 seconds
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 2000);
    }
}