
window.addEventListener("DOMContentLoaded", function () {
    const rotateIcon = document.getElementById("rotateIcon");
    
  
    // Check for device orientation change
    window.addEventListener("orientationchange", function () {
      // Check if the device is in portrait mode
      if (window.matchMedia("(orientation: portrait)").matches) {
        // Show the rotate icon
        rotateIcon.style.display = "flex";
  
        // Add the CSS class to the icon for the rotation effect
       
  
        // Hide the icon after a certain time (e.g., 5 seconds)
        setTimeout(function () { rotateIcon.style.display = "none" }, 5000); // Adjust the time as per your requirement (in milliseconds)

    }
    });
  });
  