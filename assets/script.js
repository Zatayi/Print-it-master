const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img')
const dotContainer = document.querySelector('.dots')
const tagLine = document.querySelector('#banner p')
let position = 0;

slides.forEach((slide, index) => {
	const dot = document.createElement('div')
	dot.setAttribute('class', index === 0 ? 'dot dot_selected' : 'dot')

	dotContainer.appendChild(dot)
})
const dots = document.querySelectorAll('.dot');

arrowLeft.addEventListener('click', function () {
	position--;
	updateCarrousel('left');
})
arrowRight.addEventListener('click', function () {
	position++;
	updateCarrousel('right');
})
console.log(arrowRight);
console.log(arrowLeft);


function updateCarrousel(sens) {
	if (position === -1 && sens === 'left') {
		position = slides.length - 1;
	} else if (position === slides.length && sens === 'right') {
		position = 0;
	}
	
	bannerImg.src = `assets/images/slideshow/${slides[position].image}`
	bannerImg.alt = `Slide ${position + 1}`;
	tagLine.innerHTML = slides[position].tagLine;

	updateDotSelected()
}

function updateDotSelected() {
	dots.forEach((dot, i) => {
		if (i === position) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}


