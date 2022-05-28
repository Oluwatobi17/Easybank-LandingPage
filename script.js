
// nav menu toggling
const toggleHandler = () => {
	const mobileLinks = document.querySelector('.mobile-links');
	mobileLinks.classList.toggle('hide');
	menuBtn.classList.toggle('hide');
}


const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function(){
	const mobileLinks = document.querySelector('.mobile-links');
	mobileLinks.classList.toggle('hide');
	menuBtn.classList.toggle('hide');
}

// closing of the mobile nav
const closeBtn = document.querySelector('.close-btn');

closeBtn.onclick = function(){
	const mobileLinks = document.querySelector('.mobile-links');
	mobileLinks.classList.toggle('hide');
	menuBtn.classList.toggle('hide');
}