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






$('#tabs-nav1').click(function(){
	$('.tabs-item').hide();
    $('#tabs-1').fadeIn(300);
});
$('#tabs-nav2').click(function(){
	$('.tabs-item').hide();
    $('#tabs-2').fadeIn(300);
});
$('#tabs-nav3').click(function(){
	$('.tabs-item').hide();
    $('#tabs-3').fadeIn(300);
});
$('#tabs-nav4').click(function(){
	$('.tabs-item').hide();
    $('#tabs-4').fadeIn(300);
});
$('#tabs-nav5').click(function(){
	$('.tabs-item').hide();
    $('#tabs-5').fadeIn(300);
});
$('#tabs-nav6').click(function(){
	$('.tabs-item').hide();
    $('#tabs-6').fadeIn(300);
});
$('#tabs-nav7').click(function(){
	$('.tabs-item').hide();
    $('#tabs-7').fadeIn(300);
});