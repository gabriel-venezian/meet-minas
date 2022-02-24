'use strict';

const _gallery = [
	{
		img: "img/photo_0.jpg",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "img/photo_1.jpg",
		description: "Diamantina"
	},
	{
		img: "img/photo_2.jpg",
		description: "Tiradentes"
	},
	{
		img: "img/photo_3.jpg",
		description: "São Lourenço"
	},
	{
		img: "img/photo_4.jpg",
		description: "Serro"
	},
	{
		img: "img/photo_5.jpg",
		description: "São Tomé das Letras"
	},
	{
		img: "img/photo_6.jpg",
		description: "Ipoema"
	},
	{
		img: "img/photo_7.jpg",
		description: "Ouro Preto"
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),

	galleryItems: document.querySelectorAll(".gallery-item"),
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

_elements.date.innerHTML = new Date().getFullYear();

_elements.scrollLinks.forEach(link => {
	link.addEventListener("click", e => {
		_elements.navbarList.classList.remove("navbar-list--show-links");
		
		const id = link.getAttribute("href");
		const element = document.querySelector(id);
		const position = element.offsetTop -60;
		
		window.scrollTo({
			top: position
		});

		e.preventDefault();
	});
});

_elements.toggle.addEventListener("click", () => {
	_elements.navbarList.classList.toggle("navbar-list--show-links");
});

_elements.galleryItems.forEach(item => {
	item.addEventListener("click", e => {
		const id = getImageId(e.target);
		updateModal(id);
		_elements.modal.style.display = "flex";
	});
});

_elements.sliderThumbsImage.forEach(img => {
	img.addEventListener("click", e => {
		const id = getImageId(e.target);
		updateModal(id);
	});
});

_elements.closeModalBtn.addEventListener("click", () => {
	_elements.modal.style.display = "none";
});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {
	const arrFromChildren = Array.from(target.parentNode.children);
	const id = arrFromChildren.indexOf(target);

	_sliderCounter = id;
	
	return id;
}

const updateModal = (imgId) => {
	_elements.sliderImage.src = _gallery[imgId].img;
	_elements.sliderImageNumber.innerHTML = (imgId + 1) + "/" + _gallery.length;
	_elements.sliderImageDescription.innerHTML = _gallery[imgId].description;
	
	_elements.sliderThumbsImage.forEach(img => {
		img.classList.remove("slider-thumbs__img--active");
	});
	
	_elements.sliderThumbsImage[imgId].classList.add("slider-thumbs__img--active");
}

const nextImage = () => {
	++_sliderCounter > 7 ? _sliderCounter = 0 : _sliderCounter;
	updateModal(_sliderCounter);
}

const prevImage = () => {
	--_sliderCounter < 0 ? _sliderCounter = _gallery.length - 1 : _sliderCounter;
	updateModal(_sliderCounter);
}
