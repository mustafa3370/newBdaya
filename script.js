const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});
let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
document.querySelectorAll('.videos-content video').forEach(vid=>{
	vid.onclick =()=>{
		document.querySelector('.popup-videos').style.display ='block';
		document.querySelector('.popup-videos video').src = vid.getAttribute('src');
	}
});
document.querySelector('.popup-videos span').onclick=()=>{
	document.querySelector('.popup-videos').style.display ='none';
}

//changephoto
