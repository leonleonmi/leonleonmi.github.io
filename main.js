// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of all h1 elements
function changeColor() {
    var h1s = document.getElementsByTagName('h1');
    var color = getRandomColor();
    for (var i = 0; i < h1s.length; i++) {
        h1s[i].style.color = color;
    }
}

// Attach the event listener to the window
window.addEventListener('click', changeColor);