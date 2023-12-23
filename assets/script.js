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
const bannerimg = document.querySelector('.banner-img')
let position = 0;
const numberdots = slides.length;

console.log(arrowRight);
console.log(arrowLeft);



arrowLeft.addEventListener('click', function () {
	position = position - 1;
	// position--
	imgcaroussel()
})
arrowRight.addEventListener('click', function () {
	position = position + 1;
	// position++
	imgcaroussel()
})

function imgcaroussel() {
	if (position < 0 || position > 3) {
		console.log('vous êtes en dehors du carroussel - position:', position)
	} else {
		console.log('ok vous êtes dans le carroussel - position:', position)
	}
}
