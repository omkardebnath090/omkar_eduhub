function validateContact() {

    // Step 1 — Get what user typed
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Step 2 — Clear old error messages
    document.getElementById('nameError').textContent    = '';
    document.getElementById('emailError').textContent   = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMsg').textContent   = '';

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

    if (subject === '') {
        document.getElementById('subjectError').textContent = '⚠ Please enter a subject';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = '⚠ Please write a message';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = '⚠ Message is too short';
        isValid = false;
    }

    // Step 4 — If everything is correct show success
    if (isValid) {
        document.getElementById('successMsg').textContent = '✅ Message sent! We will get back to you soon.';

        // Clear the form after 2 seconds
        setTimeout(function() {
            document.getElementById('contactForm').reset();
            document.getElementById('successMsg').textContent = '';
        }, 2000);
    }
}