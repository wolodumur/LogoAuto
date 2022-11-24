$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header').removeClass('active2');
	});
	$('.slider').slick({
		arrows:false,
		dots: false,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
				  slidesToShow: 3,
				}
			 },
			{
			  breakpoint: 820,
			  settings: {
				 slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 580,
			  settings: {
				 slidesToShow: 1,
				//  centerMode:true,
			  }
			}
		 ]
	});
	$('.slider3').slick({
		arrows:false,
		dots: true,
		slidesToShow: 1,
	});
});