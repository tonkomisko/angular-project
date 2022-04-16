const slides = document.querySelectorAll('.slide');
const button_left = document.getElementById('left');
const button_right = document.getElementById('right');
const carousel = document.getElementById('carousel');

const SLIDES_COUNT = slides.length;

// console.log('There are ' + SLIDES_COUNT + ' slides')
let current_slide = 0;

button_right.addEventListener('click', ()=>{


    console.log('clicked RIGHT')

    current_slide++;
    if(current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }

    updateSlide();

})

button_left.addEventListener('click', ()=>{
    console.log('clicked LEFT')

    current_slide--;
    if(current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }

    updateSlide();
})


function updateSlide() {
    carousel.style.transform = `translate(-${current_slide * slides[0].offsetWidth}px`;
    document.body.style.background = `#${slides[current_slide].firstElementChild.getAttribute("data-bg")}`;
}