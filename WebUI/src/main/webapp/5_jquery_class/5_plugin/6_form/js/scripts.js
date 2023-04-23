/**
 * 
 */

$(function(){
	$('#signup > form').validate({
		rules : {
			name : { required:true },
			email : { required:true,
					  email : true
			},
			website : { url : true },
			password : { minlength : 4 },
			passconf : { equalTo : '#password'}
		},
		success : function(label){
			label.addClass('valid');
			label.text('성공');
			// 글씨가 출력되지는 않음
		}
	});
	
	$('.check-all').click(function(){
		// alert($(this).prop('checked'));	//attr 안 먹히면 prop 쓰면 됨
		//alert($(this).is(':checked'))
		
		//$('.agree').prop('checked', $(this).prop('checked'));
		
		if( $(this).prop('checked') ){
			$('.agree').prop('checked', true);
		}else{
			$('.agree').prop('checked', false);			
		}
		
	});
	
	$('.agree').click(function(){
		if( $('.agree:eq(0)').prop('checked') && $('.agree:eq(1)').prop('checked') && $('.agree:eq(2)').prop('checked') && $('.agree:eq(3)').prop('checked') && $('.agree:eq(4)').prop('checked') ){
			$('.check-all').prop('checked', true);
		}else{
			$('.check-all').prop('checked', false);			
		}
	});
	
	
	
});
 