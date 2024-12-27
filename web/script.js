const images = [
    '/img/paint1.png',
    '/img/paint2.png',
    '/img/paint3.png',
    '/img/paint4.png',
    '/img/paint5.png'
];

const positions = [
    { top: '10%', left: '10%' },
    { top: '10%', right: '10%' },
    { bottom: '10%', left: '10%' },
    { bottom: '10%', right: '10%' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
];

let currentImageIndex = 0;

// Update the background with smooth transition
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

// Function to update the clock
function updateClock() {
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Baghdad'
    };

    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerText = timeString;
}

// Function to change image on arrow key press or button click
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

// Function to handle mouse movement visibility for arrows
let hideTimeout;
const arrows = document.querySelectorAll('.left-arrow, .right-arrow');

document.addEventListener('mousemove', () => {
    arrows.forEach(arrow => arrow.style.opacity = '1');
    
    // Clear the previous timeout to reset hide timeout
    clearTimeout(hideTimeout);

    // Set timeout to hide the arrows after 3 seconds of no movement
    hideTimeout = setTimeout(() => {
        arrows.forEach(arrow => arrow.style.opacity = '0');
    }, 3000); // 3 seconds
});

// Function to handle touch events on mobile for showing arrows
document.addEventListener('touchstart', () => {
    arrows.forEach(arrow => arrow.style.opacity = '1');
    
    // Clear the previous timeout to reset hide timeout
    clearTimeout(hideTimeout);

    // Set timeout to hide the arrows after 3 seconds of no touch
    hideTimeout = setTimeout(() => {
        arrows.forEach(arrow => arrow.style.opacity = '0');
    }, 3000); // 3 seconds
});

// Initialize background and clock
updateBackground();
setInterval(updateClock, 1000);
updateClock();
