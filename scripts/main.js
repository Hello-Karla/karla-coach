$(document).ready(function(){
  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });

    var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 100
});
});
