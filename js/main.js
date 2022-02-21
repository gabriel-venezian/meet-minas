const _gallery = [
	{
		img: "../img/photo_0.jpg",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "../img/photo_1.jpg",
		description: "Diamantina"
	},
	{
		img: "../img/photo_2.jpg",
		description: "Tiradentes"
	},
	{
		img: "../img/photo_3.jpg",
		description: "São Lourenço"
	},
	{
		img: "../img/photo_4.jpg",
		description: "Serro"
	},
	{
		img: "../img/photo_5.jpg",
		description: "São Tomé das Letras"
	},
	{
		img: "../img/photo_6.jpg",
		description: "Ipoema"
	},
	{
		img: "../img/photo_7.jpg",
		description: "Ouro Preto"
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),

	galleryItems: document.querySelectorAll(".galeria-item"),
	sliderThumbsImage: document.querySelectorAll(".slider-thumbs__img"),
	closeModalBtn: document.querySelector(".modal__close"),
	modal: document.querySelector(".modal"),

	slider: document.querySelector(".slider"),
	sliderImage: document.querySelector(".slider-image__img"),
	sliderImageNumber: document.querySelector(".slider-image__number"),
	sliderImageDescription: document.querySelector(".slider-image-description"),
	sliderPrevButton: document.querySelector(".slider-buttons__btn-prev"),
	sliderNextButton: document.querySelector(".slider-buttons__btn-next"),
}

let _sliderCounter = 0, _touchStart, _touchEnd;

_elements.date.innerHTML = new Date().getFullYear() + ".";

_elements.scrollLinks.forEach(link => {

});

_elements.toggle.addEventListener("click", () => {

});

_elements.galleryItems.forEach(item => {

});

_elements.sliderThumbsImage.forEach(img => {

});

_elements.closeModalBtn.addEventListener("click", () => {

});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {

}

const updateModal = (imgId) => {

}

const nextImage = () => {

}

const prevImage = () => {

}

_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});
