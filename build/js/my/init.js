$(document).ready(function() {
	/*scroll spy */
	$("body").scrollspy({target: "#menu", offset:80});
	/*scroll spy END*/
	/*smooth links */
	$('a.smooth').click(function(){
		$('html').removeClass('nav-active');
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		$('input[type=tel]').mask("+7 (999) 999-99-99");
	}
	$('[data-target="show"]').click(function(e){
		$('.work').removeClass('hidden');
		$(this).addClass('hidden');
	});
	$('[data-item="offcanvas-menu"]').click(function(event){
    	$('html').toggleClass('nav-active');
    	event.preventDefault();
    });
    $('.close-nav').click(function(event){
    	$('html').toggleClass('nav-active');
    	event.preventDefault();
    });
	/*smooth links END*/
	/*animation when scrolling*/
	$('.trigger').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		var that = 'assets/img/pacman.gif';
		if (isInView) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
			$('.content.block-5').addClass('anim');
			$('.show-anim').attr('src', that);
		} else {
			$(this).removeClass('in-view');
			$('.content.block-5').removeClass('anim');
			$('.show-anim').attr('src', '');
		}
	});
	/*animation when scrolling*/

	var owlMain = $('[data-item="slider-item"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
		dots: true,
	});
	var form = $('[data-form="send"]');

	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});

	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
});
function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
