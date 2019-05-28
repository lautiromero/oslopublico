$(document).ready(function(){
	var altura = $('#menu1').offset().top;
	


	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#menu1').addClass('menu-fixed');
			$('.nav1').css({'margin':'1%'});
		} else {
			$('#menu1').removeClass('menu-fixed');
			$('.nav1').css({'margin':'2%'});
		}
	});
 
});