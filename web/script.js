const images = [
    '/img/paint1.png',
    '/img/paint2.png',
    '/img/paint3.png',
    '/img/paint4.png',
    '/img/paint5.png'
];

let currentImageIndex = 0;

// Function to update the background with smooth transition
function updateBackground() {
    const body = document.body;

    // Add fade-out class to start fading out
    body.classList.add('fade-out');

    // Wait for the fade-out transition to complete before changing the background
    setTimeout(() => {
        body.style.backgroundImage = `url(${images[currentImageIndex]})`; // Change the background image
        body.classList.remove('fade-out'); // Remove fade-out class to start fading in
    }, 1000); // Match the duration of the fade-out transition (1s)
}

// Function to change image on arrow key press
function changeImage(direction) {
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else if (direction === 'right') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    updateBackground(); // Update the background after changing the index
}

// Event listener for remote control keys (Arrow Left and Arrow Right)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage('left');
    } else if (event.key === 'ArrowRight') {
        changeImage('right');
    }
});

// Event listeners for the buttons (left and right arrows)
document.querySelector('.left-arrow').addEventListener('click', () => {
    changeImage('left');
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    changeImage('right');
});

// Initialize background
updateBackground();

let mouseTimer;

// Detect mouse movement on desktop
document.addEventListener('mousemove', () => {
    showArrows();
    clearTimeout(mouseTimer);
    mouseTimer = setTimeout(hideArrows, 1000); // Hide arrows after 1 second of inactivity
});

// Detect touch interaction on mobile
document.addEventListener('touchstart', () => {
    showArrows();
    clearTimeout(mouseTimer);
    mouseTimer = setTimeout(hideArrows, 1000); // Hide arrows after 1 second of inactivity
});

function showArrows() {
    document.querySelector('.left-arrow').classList.add('visible');
    document.querySelector('.right-arrow').classList.add('visible');
}

function hideArrows() {
    document.querySelector('.left-arrow').classList.remove('visible');
    document.querySelector('.right-arrow').classList.remove('visible');
}
