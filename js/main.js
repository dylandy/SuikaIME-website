var resize_window = function(){
	$('#page1 , #page2').css('height',$(window).height() + 'px');
}
jQuery(function($){
	$('#topage2').click(function(){
		$('html, body').animate({scrollTop: $('#page2').offset().top} , 800);
	});
	$(window).resize(resize_window);
	resize_window();
});
