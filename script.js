const slides = document.querySelectorAll('.photo-frame img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 2000);

const envelope = document.querySelector('.envelope');
const sparkleContainer = document.querySelector('.sparkle-container');
const backgroundAudio = document.getElementById('background-audio');
const newAudio = document.getElementById('new-audio');
const playNewAudioButton = document.getElementById('play-new-audio');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    createSparkles(20); // Adjust the number of sparkles here
});

function createSparkles(count) {
    const envelopeRect = envelope.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle', 'heart-shape');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkleContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000); // Sparkle duration
    }
}

playNewAudioButton.addEventListener('click', () => {
    if (!newAudio.paused) {
        newAudio.pause();
        newAudio.currentTime = 0;
    } else {
        backgroundAudio.pause();
        newAudio.play();
    }
});
