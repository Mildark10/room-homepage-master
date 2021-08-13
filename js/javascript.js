const img_box = document.querySelector('.img-box');
const slides = img_box.getElementsByTagName('img');
var i = 0;

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function PrevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

const contenido_box = document.querySelector('.contenido-box');
const slidesTexto = contenido_box.getElementsByTagName('div');
var j = 0;

function nextSlideText() {
    slidesTexto[j].classList.remove('active');
    j = (j + 1) % slidesTexto.length;
    slidesTexto[j].classList.add('active');
}

function PrevSlideText() {
    slidesTexto[j].classList.remove('active');
    j = (j - 1 + slidesTexto.length) % slidesTexto.length;
    slidesTexto[j].classList.add('active');
}