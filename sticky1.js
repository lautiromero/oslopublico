$(document).ready(function(){
	var altura = $('#menu1').offset().top;
	var wi = $(window).width();
			// if(wi >= '992') {




// Agrega el stick a responsive siempre

var winWidth = $(window).width();

			if(winWidth < 992) {
				$('#menu1').addClass('menu-fixed');

			}

			else{
								$(window).on('scroll', function(){
						if ( $(window).scrollTop() > altura ){
							$('#menu1').addClass('menu-fixed');
							$('.nav1').css({'margin':'1%'});
						} else {
							$('#menu1').removeClass('menu-fixed');
							$('.nav1').css({'margin':'2%'});
						}
					});

			}

});

