

$(window).on('load', function(){

	$('#overlay img').fadeOut(600, function(){

		$('#overlay').fadeOut(200);
	});
});

$(window).on('scroll', function(){

	var scroll = $(window).scrollTop();

	//About effect
	var aboutDepth = $('.about').offset().top - $(window).innerHeight() * .2;
	if (scroll >= aboutDepth) {
		$('.about article').css('width', '100%');
		$('.about article span p').css('opacity', '1');
		$('.hobbies').css('opacity', '1');
	}
	
	//Skills effect
	var skillsDepth = $('.skills').offset().top - $(window).innerHeight() * .2;
	if (scroll >= aboutDepth) {
		$('.skills ul li:nth-of-type(1) div').addClass('percentage90');
		$('.skills ul li:nth-of-type(2) div').addClass('percentage70');
		$('.skills ul li:nth-of-type(3) div').addClass('percentage60');
		$('.skills ul li:nth-of-type(4) div').addClass('percentage50');
		$('.skills ul li:nth-of-type(5) div').addClass('percentage90');
		$('.skills ul li:nth-of-type(6) div').addClass('percentage80');
	}

});

$(document).ready(function(){

	//Background gallery images
	$('.gallery div').each(function() {
		var img = $(this).data('image');
		$(this).css('background', 'rgb(35, 34, 34) url(img/' + img + ') no-repeat 50% 50% / cover');
	});

	//GalleryModalWindow
	$('.gallery div').each(function() { 

		$(this).on('click', function() {
			var img = $(this).data('image');
			$('.modalContainer').addClass('flex');
			$('.modalImg').css('background', 'url(img/' + img + ') no-repeat 50% 50% / contain');
			$('body').css('overflow', 'hidden');
		});

	});

	$('.modalImg img, .modalContainer').on('click', function() {
		$('.modalContainer').removeClass('flex');
		$('body').css('overflow', 'initial');
	});

	//OwlCarousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		smartSpeed: 600,
		fluidSpeed: true,
		dots: false
	});

	//Select year
	$('.years ul li').each(function() {	
		$(this).on('click', function() {
			var number = $(this).data('number');
			$('.selected').removeClass('selected');
			$(this).addClass('selected');
			$('.visible').removeClass('visible');
			$('.yearContent' + number).addClass('visible');
			$(".owl-carousel").trigger('to.owl.carousel', number-1);
		});
	});
});

//ScrollTo
$('.moveTo').on('click', function(){

	var level = $(this).data('level');

	$('html').animate({
		scrollTop: $(level).offset().top
	}, 1000);

});

//Form
$("#formulary").on("submit", function(event) {

      event.preventDefault();

      $.post({
            
            url:'manager.php',

            data: $("#formulary").serialize(),

            success: function() {
            		
                  $('input, textarea').val("");
                  msg("Mensaje recibido");
            }
      });
});


function msg(texto) {

     $('.message').css('transform', 'translateX(0)');
     $('.message p').text(texto);

	setTimeout( function(){
	    $('.message').css('transform', 'translateX(100%)');
	}, 3000);
}