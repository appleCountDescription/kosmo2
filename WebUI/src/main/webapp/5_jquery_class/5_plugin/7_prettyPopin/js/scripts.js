/**
 * 
 */
$(function(){
	$('a:eq(0)').prettyPopin({
		width : 500
	});
	
	$('a:eq(1)').prettyPopin({
		width : 350,
		callback : function(){
			alert('창 닫히고 나서 작업');
		}
	});
});