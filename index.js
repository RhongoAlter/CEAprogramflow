// Get the element by its ID
const rotateIcon = document.getElementById('rotateIcon');

// Set a timeout of 5 seconds (5000 milliseconds) to hide the element
function timeout() { 
    setTimeout(function(){rotateIcon.style.display='none'}, 7000);
}

timeout();
