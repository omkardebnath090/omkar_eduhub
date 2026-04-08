// Copy UPI ID to clipboard
function copyUPI() {
    // .innerText.trim() ensures we only get the text, no extra spaces
    const upiId = document.getElementById('upiId').innerText.trim();

    navigator.clipboard.writeText(upiId).then(function() {
        const msgElement = document.getElementById('copyMsg');
        msgElement.textContent = '✅ UPI ID copied to clipboard!';
        msgElement.style.color = '#28a745'; // Success green

        // Clear message after 2.5 seconds
        setTimeout(function() {
            msgElement.textContent = '';
        }, 2500);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}