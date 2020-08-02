$('.menu a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;
		//menuHeight = $('.menu').innerHeight();//
	$('html, body').animate({
		scrollTop: targetOffset// - menuHeight//
	}, 500);

	
});

$('.img-sidebar a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500)

});

const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.horizontal-nav-links');
const links = document.querySelector('.horizontal-nav-links li a');

hamburguer.addEventListener('click', () =>{
	navLinks.classList.toggle('open');
});
navLinks.addEventListener('click', () =>{
	navLinks.classList.toggle('open');
});
