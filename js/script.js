$(function () {

/*Carousel slider*/
$('.carousel').carousel({
	interval: 5000,
	pause: 'hover'
});


/*to-top button*/
$(window).scroll(function() {
	if($(this).scrollTop() > $(document).height() - 1000) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

$('.scroll-up').on('click', function() {
	$('body, html').animate({ scrollTop:0 },800);
	return false;
});


/*Scroll to block*/
$('ul li a, .header-logo a').on('click', function () {

	var topNavHeight = $('.navbar-custom').innerHeight();
	var dropdownMenuHeight = $('#velox-navbar-collapse').innerHeight();
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;

	if ($(elementClick).length != 0) {    // проверка существования элемента
		if ($('.navbar-custom').hasClass('default') && dropdownMenuHeight > 50){
			$('html, body').animate({ scrollTop: destination - dropdownMenuHeight }, 1000);
		} else {
			$('html, body').animate({ scrollTop: destination }, 1000);
		}
	}
	return false; 
});


/*Show and hide fixed navbar when scroll*/
$(document).on('scroll', function(){

	var headerHeight = $('.main-header').innerHeight();
	var topNavHeight = $('.navbar-custom').innerHeight();
	var topNav = $('.navbar-custom');
	var documentScroll = $(this).scrollTop();

	if (documentScroll >= headerHeight && topNav.hasClass('default')){
		topNav.fadeOut(0, function(){
			$(this).removeClass("default").addClass('navbar-fixed').fadeIn(500);
			$('#home').css('padding-top', topNavHeight);
		});
	} else if (documentScroll < headerHeight && topNav.hasClass('navbar-fixed')) {
		topNav.fadeOut(300, function(){
			$(this).removeClass('navbar-fixed').addClass('default').fadeIn(300);
			$('#home').removeAttr('style');
		});
	}
});


/*hide navbar menu when click on menu-item*/
$(function () {
	$(".navbar-collapse a").click(function() {
		if (!$(this).hasClass("dropdown-toggle")) {
			$(".navbar-collapse").collapse('hide');
		}
	});
	return false;
});


/*Simple version of Show and hide fixed navbar when scroll
need to enable in style .navbar-fixed {	transition: all ease-out 0.5s;}*/
// $(function () {
// 	var headerHeight = $('.main-header').innerHeight();
// 	var topNavHeight = $('.navbar-custom').height();

// 	$(document).on('scroll', function(){

// 		var documentScroll = $(this).scrollTop();

// 		if (documentScroll > headerHeight) {
// 			$('.navbar-custom').addClass('navbar-fixed');
// 			$('#home').css('padding-top', topNavHeight);
// 		} else {
// 			$('.navbar-custom').removeClass('navbar-fixed');
// 			$('#home').removeAttr('style');
// 		}
// 	});
// });


});