
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const rotateMessage = document.getElementById('rotateMessage');

    function checkOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
            rotateMessage.style.display = "block";
            // Start the rotation animation
            rotateMessage.style.animation = "rotateAnimation 2s infinite linear";
        } else {
            rotateMessage.style.display = "none";
            // Stop the rotation animation
            rotateMessage.style.animation = "none";
        }
    }

    // Check the initial orientation
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener('orientationchange', checkOrientation);
});
