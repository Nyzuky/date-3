const yesButton = document.querySelector('.yes_btn');
const noButton = document.querySelector('.no_btn');
const displayText = document.querySelector('.text');

// When the "Yes" button is clicked, change the text
yesButton.addEventListener('click', function() {
    displayText.innerHTML = 'Okay, Mahal na kita agad <3';
});

// When the "No" button is clicked, move it to a random position
noButton.addEventListener('click', function() {
    // Get the width and height of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * (viewportWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - noButton.offsetHeight));

    // Set the new random position of the "No" button
    displayText.innerHTML = 'Try Again, Dili pwede ang No kay gwapo ra kayko <3'
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});