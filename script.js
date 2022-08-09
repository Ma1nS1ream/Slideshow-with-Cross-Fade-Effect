(function() {
	"use strict";
	const myimages = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
    let currentimage = 0;
	const container = document.getElementById('content');
	const nextBtn = document.getElementById('next');
	const prevBtn = document.getElementById('previous');
    nextBtn.addEventListener('click', function (event) {
		event.preventDefault();
		currentimage++;
		if (currentimage > myimages.length-1) {currentimage = 0;}
		swapimg();
	} );
	prevBtn.addEventListener('click', function (event) {
		event.preventDefault();
		currentimage--;
		if (currentimage < 0) {currentimage = myimages.length-1;}
		swapimg();
	} );
	function swapimg() {
		const newslide = document.createElement('img');
	    newslide.src = myimages[currentimage];
		newslide.className = 'fadeinimg';
		container.appendChild(newslide);
		newslide.setAttribute('height', "300");
		if (container.children.length > 2) {container.removeChild(container.children[0]);}
	};
})();
	
	