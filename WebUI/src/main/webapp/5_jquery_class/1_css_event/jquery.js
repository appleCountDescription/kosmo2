/**
 * 
 */

$(function(){
	//$('#celebs tbody tr:odd').css({'background':'aliceblue'});
	$('#celebs tbody tr:even').addClass('table_striping');
	
	// hover
	$('#celebs tbody tr').hover(function(){
		$(this).addClass('td_mouseover');	
	}, function(){
		$(this).removeClass('td_mouseover');
	});
	
	$('#hideButton').click(function(){
		$('#intro').fadeOut(0);
	});
	
	$('#showButton').click(function(){
		$('#intro').fadeIn(0);
	});
	
	$('#toggleButton').click(function(){
		var img = $('#intro img');
		img.fadeToggle();
		
		/*
		if( img.is(':visible')){
			$(this).val('감추기');
		}else{
			$(this).val('보이기');
		}*/
	});
	
});



