const images = [
    '../img/paint1.png',
    '../img/paint2.png',
    '../img/paint3.png',
    '../img/paint4.png',
    '../img/paint5.png'
];

const positions = [
    { top: '10%', left: '10%' },
    { top: '10%', right: '10%' },
    { bottom: '10%', left: '10%' },
    { bottom: '10%', right: '10%' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
];

let currentImageIndex = 0;

function updateBackground() {
    const body = document.body;
    body.style.backgroundImage = `url(${images[currentImageIndex]})`;

    const frame = document.getElementById('frame');
    const position = positions[currentImageIndex];
    frame.style.position = 'absolute';
    frame.style.top = position.top || '';
    frame.style.left = position.left || '';
    frame.style.right = position.right || '';
    frame.style.bottom = position.bottom || '';
    frame.style.transform = position.transform || '';
}

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

// Event listener for remote control keys
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
