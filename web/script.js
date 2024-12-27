const images = [
    '/img/paint1.png',
    '/img/paint2.png',
    '/img/paint3.png',
    '/img/paint4.png',
    '/img/paint5.png'
];

let currentImageIndex = 0;

// This function updates the background image based on the current index
function updateBackground() {
    const body = document.body;
    body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    body.style.backgroundSize = 'cover';  // Ensure the image covers the screen

    // Optional: Check if the frame also needs to adjust position
    const frame = document.getElementById('frame');
    if (frame) {
        frame.style.position = 'absolute';
    }
}

// Function to change the image based on left or right arrow press
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

function changeImage(direction) {
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else if (direction === 'right') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    updateBackground();
}

// Event listener for remote control keys (left and right arrows)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage('left');
    } else if (event.key === 'ArrowRight') {
        changeImage('right');
    }
});

// Initialize clock and background
setInterval(updateClock, 1000);
updateClock();
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
