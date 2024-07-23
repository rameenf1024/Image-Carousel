const slidesContainer = document.querySelector('main');
let slides = document.querySelectorAll(".slide");
let counter = 1;
let interval;

// This we add for our images to move smoothly after one loop

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slidesContainer.append(firstClone);
slidesContainer.prepend(lastClone);

slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


const goPrev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
    resetInterval();
}

const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
    resetInterval();
}


const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}


const startInterval = () => {
    interval = setInterval(goNext, 4000); 
}

const resetInterval = () => {
    clearInterval(interval);
    startInterval();
}

startInterval();


