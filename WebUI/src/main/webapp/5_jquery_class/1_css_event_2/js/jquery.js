$(document).ready(function(){
	
	$('.rollover > img').hover(function(){
		var src = $(this).attr('src');		// src 선언 후 할당(this는 img 가리킴, img 안의 src 지칭)
		$(this).attr('src', src.replace('_off', '_on'));	// src off에서 on으로
	}, function(){
		var src = $(this).attr('src');
		$(this).attr('src', src.replace('_on', '_off'));
	});	
	
});