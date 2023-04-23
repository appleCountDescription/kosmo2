$(function(){
	$('.accordion').each(function(){
		
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		allDd.first().show(); 
		//allDd.find('dd:eq(0)').show();
		
		allDt.css({cursor:'pointer'});
		
		allDt.click(function(){
			allDd.hide();
			$(this).next().toggle();
		});
		
		
		
	});
	
});