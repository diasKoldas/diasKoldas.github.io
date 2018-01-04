$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});

$(document).ready(function(){
	$('.cars-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		asNavFor: '.cars-slider',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});