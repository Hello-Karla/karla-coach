$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('hidden')
    });

    var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 100
});
});
