
window.addEventListener("DOMContentLoaded", function () {
    const rotateIcon = document.getElementById("rotateIcon");
    const icon = document.getElementById("icon");
  
    // Check for device orientation change
    window.addEventListener("orientationchange", function () {
      // Check if the device is in portrait mode
      if (window.innerHeight > window.innerWidth) {
        // Show the rotate icon
        rotateIcon.style.display = "flex";
  
        // Add the CSS class to the icon for the rotation effect
        icon.classList.add("rotate-this-icon");
  
        // Hide the icon after a certain time (e.g., 5 seconds)
        setTimeout(function () {
          rotateIcon.style.display = "none";
  
          // Remove the CSS class to reset the rotation
          icon.classList.remove("rotate-this-icon");
        }, 5000); // Adjust the time as per your requirement (in milliseconds)
      }
    });
  });
  