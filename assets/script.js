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
let position = 0;
const dots = document.querySelectorAll('.dot');

console.log(arrowRight);
console.log(arrowLeft);



arrowLeft.addEventListener('click', function () {
	position = position - 1;
	// position--
	imgcaroussel(position, 'left')
	numberdots(position, 'left');
})
arrowRight.addEventListener('click', function () {
	position = position + 1;
	// position++
	imgcaroussel(position, 'right')
	numberdots(position,'right');
})

function imgcaroussel(index, sens) {
	
	if (position === -1 && sens === 'left') {
	  position = slides.length - 1;
  } else if (position === slides.length && sens === 'right') {
	  position = 0;
  }

  
  const imagePath = `assets/images/slideshow/${slides[position].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${position + 1}`;


  const tagLine = slides[position].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  
}

function numberdots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}