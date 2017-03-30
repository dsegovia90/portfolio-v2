$(document).ready(function(){

	var dynamicHeight = 'calc(85vh - ' + $('nav').height() + 'px)'
	console.log(dynamicHeight)
	$('#hero').css('height', dynamicHeight)

	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('is-active')
		$('.nav-menu').toggleClass('is-active')
	});

	function scroll(link, destination) {
		$(link).click(function(){
			$('html, body').animate({
				scrollTop: ($(destination).offset().top)
			}, 750)
		});
	}

	scroll('.portfolio', '#portfolio')
	scroll('.home', 'nav')

});