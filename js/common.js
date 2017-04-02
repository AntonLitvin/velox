$(function () {

/*Carousel slider*/
$('.carousel').carousel({
	interval: 8000,
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
$('#velox-navbar-collapse a, #js-bottom-nav a, .header-logo a').on('click', function () {

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
			$('#js-home').css('padding-top', topNavHeight);
		});
	} else if (documentScroll < headerHeight && topNav.hasClass('navbar-fixed')) {
		topNav.fadeOut(300, function(){
			$(this).removeClass('navbar-fixed').addClass('default').fadeIn(300);
			$('#js-home').removeAttr('style');
		});
	}
});


/*hide navbar menu when click on menu-item*/
$(function () {
	$('.navbar-collapse a, .header-logo a').click(function() {
		if (!$(this).hasClass('dropdown-toggle')) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	return false;
});


/*equal height*/
// $(".portfolio-item-inner").equalHeights();


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg"></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg"></a>
	$(".fancybox").fancybox();

});


/*Animations*/
$(window).load(function() {
	$(".header-title").animated("fadeInDown", "fadeOut");
	$("h2").animated("fadeInUp", "fadeOut");
	$(".services-item:nth-child(1),.services-item:nth-child(2)").animated("fadeInLeft", "fadeOut");
	$(".services-item:nth-child(3),.services-item:nth-child(4)").animated("fadeInRight", "fadeOut");
	$(".portfolio-item").animated("fadeIn", "fadeOut");
	$(".brand-item").animated("fadeInRight", "fadeOut");
	$(".contact-us h3").animated("fadeInUp", "fadeOut");
	$(".contact-us label").animated("fadeInUp", "fadeOut");
	$(".bottom-nav").animated("fadeInUp", "fadeOut");
});