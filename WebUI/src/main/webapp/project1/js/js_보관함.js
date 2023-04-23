/**
 * 
 */

$(function(){

	var num;
	var td = "";
	
//보관 버튼을 눌렀을 떄 발생하는 이벤트
$('.saveBtn').click(function() {
		//alert창에 사물함 보관을 선택하셨습니다가 뜬다
		alert('사물함 보관을 선택하셨습니다.');
		//iframe에서 #mainTable td.info를 찾아서 보여준다
		$("#iframe").contents().find('#mainTable td.info').show();
		//iframe에서 #mainTable td.info를 찾아서 숨긴다
		$("#iframe").contents().find('#mainTable td.danger').hide();
		//iframe에서 .pw의 값을 찾는다
		$("#iframe").contents().find('.pw').val('');
		//iframe에서 #worning의 값을 찾아 보여준다
	  	$("#iframe").contents().find('#worning').val('');
		//iframe을 보여준다
		$('#iframe').css('display','inline-block');
		//p의 text를 보관모드로 바꾼다
		$('p').text('보관모드');
});

// 찾기버튼을 눌렀을 때 발생하는 이벤트
$('.saveBtn2').click(function() {
		//alert창에 사물함 찾기를 선택하셨습니다. 찾기를 원하시는 칸을 선택해주십시오 문구가 뜬다
		alert('사물함 찾기를 선택하셨습니다. 찾기를 원하시는 칸을 선택해주십시오.');
		//iframe에서 #mainTable td.info를 찾아서 보여준다
	 	$("#iframe").contents().find('#mainTable td.danger').show();
	 	//iframe에서 #mainTable td.info를 찾아서 숨긴다
	  	$("#iframe").contents().find('#mainTable td.info').hide();
	  	//iframe에서 보관버튼을 눌렀을 때 나오는 비밀번호 키패드를 숨긴다
	   	$("#iframe").contents().find('.password').hide();
	   	//iframe에서 찾기버튼을 눌렀을 때 나오는 비밀번호 키패드를 숨긴다
	    $("#iframe").contents().find('.password2').hide();
	    //iframe 에서 보관버튼을 눌렀을 때 나오는 비밀번호를 한번 더 입력하시오 를 누르면 나오는 비밀번호 키패드를 숨긴다
	    $("#iframe").contents().find('.passwordUnder').hide(); 
	    //iframe 에서 찾기버튼을 눌렀을 때 나오는 비밀번호를 한번 더 입력하시오 를 누르면 나오는 비밀번호 키패드를 숨긴다
	    $("#iframe").contents().find('.password2Under').hide();
	    //iframe에서 .pw의 값을 찾는다
	  	$("#iframe").contents().find('.pw').val('');
	  	//iframe에서 #worning의 값을 찾아 보여준다
	   	$("#iframe").contents().find('#worning').val('');
	   	//p의 text를 찾기모드로 바꾼다
	 	$('p').text('찾기모드');

});
	
//보관함 칸에 걸리는 hover 이벤트	
$('#mainTable td').hover(function() {
			//마우스의 포커스가 가면 css의 폰트 사이즈가 170%가 된다
			$(this).find('b').css('font-size','170%')
			},function(){
			//마우스의 포커스를 잃으면 css의 폰트 사이즈가 100%가 된다
			$(this).find('b').css('font-size','100%')
});

//보관함 칸을 누르면 발생하는 이벤트    
$('#mainTable td').click(function() {
		// 만약 클릭한 요소가 class와 같다면 info로 바꿔준다
		if( $(this).attr('class') == 'info' ){
		//num에 클릭한 이벤트의 텍스트를 담는다
		num = $(this).text();
		//alert 창에 num의 텍스트와 칸을 선택하셨습니다 의 창과 비밀번호를 설정해주십시오의 창이 뜬다
		alert(num + '칸을 선택하셨습니다.');
	    alert('비밀번호를 설정해주십시오.');
	    // 그렇지않으면 num에 클릭한 이벤트의 텍스트를 담는다
	     } else{ 
		num = $(this).text();
		//alert 창에 num의 텍스트와 칸을 선택하셨습니다 의 창과 num의 텍스트 칸의 물품을 찾기 원하시면 num의 텍스트 칸의 비밀번호를 입력하시오 라는 창이 뜬다
	    alert(num + '칸을 선택하셨습니다.');
	    alert(num +'칸의 물품 찾기를 원하시면 ' + num + '칸의 비밀번호를 입력하십시오');
		 }
	
     	td = $(this);
		//비밀번호 입력하시오 칸의 포커스를 준다
	  	$('#exampleInputPassword1').focus();
});

//보관버튼 비밀번호 키패드 확인 버튼을 클릭했을 때 발생하는 이벤트 / 한번 더 비밀번호를 입력하시오 창을 눌렀을 떄 나오는 키패드
$('#submit1-2').click(function(evt) { 
		  
		  // (유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같지 않다면 
		  if( $('#exampleInputPassword1').val() != $('#exampleInputPassword2').val() ) {
			  //비밀번호가 일치하지 않습니다 라는 문구를 보여준다
			  $('#worning').css('display','inline-block');
			  //발생한 이벤트를 막아버린다
			  evt.preventDefault();
			  evt.stopPropagation();
			  // worning의 값은 비밀번호가 일치하지 않습니다 이다
			  $('#worning').val("비밀번호가 일치하지 않습니다.");
		  	}; // end of if
		  
		  // (유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같다면
		  if(	$('#exampleInputPassword1').val() == $('#exampleInputPassword2').val() ){
			  	//num의 텍스트에 있는 번을 공백으로 비운 이름과 비밀번호를 입력하시오의 값과 기간을 하루 짜리로 쿠키를 저장한다
		  		$.cookie(num.replace('번',''), $('#exampleInputPassword1').val() , {expires:1 } );
		  		// alert창에는 보관이 완료되었습니다 라는 문구를 띄워준다
		   		alert('보관이 완료되었습니다.');
		  		//td에 info를 지우고 danger를 추가해준다
				$(td).removeClass('info').addClass('danger');
				//td(클릭된 셀) 의 id가 smol인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		 		$(td).find('b#smol').attr("tabindex", -1).focus();
		 		//td(클릭된 셀) 의 id가 big인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		 		$(td).find('b#big').attr("tabindex", -1).focus();
		 		//pw의 값을 초기화한다
		    	$('.pw').val('');
		    	//worning의 값을 초기화 한다
	   			$('#worning').val('');
				};// end of if
});
	
//찾기버튼 비밀번호 키패드 확인 버튼을 클릭했을 때 발생하는 이벤트 / 한번 더 비밀번호를 입력하시오 창을 눌렀을 떄 나오는 키패드
$('#submit2-1').click(function(evt) { 
		  
		   //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같지않다면
		  if( $('#exampleInputPassword1').val() != $('#exampleInputPassword2').val() ) {
			  //비밀번호가 일치하지 않습니다 라는 문구를 보여준다
			  $('#worning').css('display','inline-block');
			  //발생한 이벤트를 막아버린다
			  evt.preventDefault();
			  evt.stopPropagation();
			   // worning의 값은 비밀번호가 일치하지 않습니다 이다
			  $('#worning').val("비밀번호가 일치하지 않습니다.");
			  
		  	} //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같고
		  	// 쿠키에 저장되어 있는 값과 비밀번호의 값이 같다면
		  	else if( $('#exampleInputPassword1').val() == $('#exampleInputPassword2').val() 
		  	&& $('#exampleInputPassword1').val() ==  $.cookie($(td).text().replace('번','')))
		  	//쿠키의 유효기간을 0으로 줘서 삭제한다
		  	{$.cookie(num.replace('번',''), $('#exampleInputPassword1').val() , {expires:0 } );
		  	// 그리고 나서 alert 창에 찾기가 완료되었습니다 문구가 뜬다
		  	alert('찾기가 완료되었습니다.');
		  	//td(클릭된 셀) 의 id가 smol인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		   	$(td).find('b#smol').attr("tabindex", -1).focus();
		   	//td(클릭된 셀) 의 id가 big인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		  	$(td).find('b#big').attr("tabindex", -1).focus();
		  	//pw의 값을 초기화한다
		  	$('.pw').val('');
		  	//worning의 값을 초기화 한다
	   		$('#worning').val('');
		  	//td에 있는 danger를 지우고 info를 추가한다
			$(td).removeClass('danger').addClass('info');
			} 
			// 그게 아니라면 alert 창에 비밀번호가 틀렸습니다 문구가 뜬다
			else alert('비밀번호가 틀렸습니다.');
});
	  
//보관버튼 비밀번호 키패드 확인 버튼을 클릭했을 때 발생하는 이벤트 / 비밀번호를 입력하시오 칸을 눌렀을 떄 나오는 키패드
$('#submit').click(function(evt) { 
		  
		  //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같지않다면 
		  if( $('#exampleInputPassword1').val() != $('#exampleInputPassword2').val() ) {
			  //비밀번호가 일치하지 않습니다 라는 문구를 보여준다
			  $('#worning').css('display','inline-block');
			  //발생한 이벤트를 막아버린다
			  evt.preventDefault();
			  evt.stopPropagation();
			  // worning의 값은 비밀번호가 일치하지 않습니다 이다
			  $('#worning').val("비밀번호가 일치하지 않습니다.");
		  }
		   //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같다면
		  if( $('#exampleInputPassword1').val() == $('#exampleInputPassword2').val() )
		  	//num의 텍스트에 있는 번을 공백으로 비운 이름과 비밀번호를 입력하시오의 값과 기간을 하루 짜리로 쿠키를 저장한다
		  	{$.cookie(num.replace('번',''), $('#exampleInputPassword1').val() , {expires:1 } );
		  	// alert 창에 보관이 완료되었습니다. 문구가 뜬다
		   	alert('보관이 완료되었습니다.');
		  	//td에 info를 지우고 danger를 추가해준다
			$(td).removeClass('info').addClass('danger');
			//id가 smol인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
	      	$('b#smol').attr("tabindex", -1).focus();
	      	//id가 big인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
	      	$('b#big').attr("tabindex", -1).focus();
	      	//pw의 값을 초기화한다
	      	$('.pw').val('');
	      	//worning의 값을 초기화한다
	   		$('#worning').val('');
		}
		
});
	
	
// 찾기버튼 비밀번호 키패드 확인 버튼을 클릭했을 때 발생하는 이벤트 / 비밀번호를 입력하시오 칸을 눌렀을 떄 나오는 키패드
$('#submit2').click(function(evt) { 
		  
		   //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같지않다면 
		  if( $('#exampleInputPassword1').val() != $('#exampleInputPassword2').val() ) {
			  //비밀번호가 일치하지 않습니다 라는 문구를 보여준다
			  $('#worning').css('display','inline-block');
			  //발생한 이벤트를 막아버린다
			  evt.preventDefault();
			  evt.stopPropagation();
			   // worning의 값은 비밀번호가 일치하지 않습니다 이다
			  $('#worning').val("비밀번호가 일치하지 않습니다.");
		  	}
		  //(유효성 검사) 만약 비밀번호를 입력하시오의 칸의 값과 비밀번호를 한번 더 입력하시오의 칸의 값이 같고
		  // 쿠키에 저장되어 있는 값과 비밀번호의 값이 같다면
		  else if( $('#exampleInputPassword1').val() == $('#exampleInputPassword2').val() 
		  && $('#exampleInputPassword1').val() ==  $.cookie($(td).text().replace('번','')))
		  	//쿠키의 유효기간을 0으로 줘서 삭제한다
		  	{$.cookie(num.replace('번',''), $('#exampleInputPassword1').val() , {expires:0 } );
		  	// 그리고 나서 alert 창에 찾기가 완료되었습니다 문구가 뜬다
		  	alert('찾기가 완료되었습니다.');
		  	//id가 smol인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		   	$(td).find('b#smol').attr("tabindex", -1).focus();
		   	//id가 big인하위태그 b를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		  	$(td).find('b#big').attr("tabindex", -1).focus();
		  	//td에 danger를 지우고 info를 추가해준다
			$(td).removeClass('danger').addClass('info');
			//pw의 값을 초기화한다
		 	$('.pw').val('');
		 	//worning의 값을 초기화한다
	   		$('#worning').val('');
			} 
			// 그게 아니라면 alert 창에 비밀번호가 틀렸습니다 문구가 뜬다
			else alert('비밀번호가 틀렸습니다.');
});

// 비밀번호 키패드를 누르면 발생하는 이벤트	 
$('button.a').click(function() {
	   var currentValue = $("input#exampleInputPassword1").val();   // 현재의 값이 input#password(입력한 수가 점으로 출력되는 줄)에 뜬다 
       var newValue = currentValue + $(this).text().trim();   // 이어서 숫자 버튼을 누르면 currentValue에 입력한 값이 연속으로 더해진다
       $("input#exampleInputPassword1").val(newValue);   // 그 newValue값을 input#password에 뜨게 한다
 });
   
// 비밀번호 키패드를 누르면 발생하는 이벤트	    
$('button.a2').click(function() {
	   var currentValue2 = $("input#exampleInputPassword2").val();   // 현재의 값이 input#password(입력한 수가 점으로 출력되는 줄)에 뜬다 
       var newValue2 = currentValue2 + $(this).text().trim();   // 이어서 숫자 버튼을 누르면 currentValue에 입력한 값이 연속으로 더해진다
       $("input#exampleInputPassword2").val(newValue2);   // 그 newValue값을 input#password에 뜨게 한다
});
   
// 취소 버튼을 누르면 비밀번호를 입력하시오 의 값이 없어진다
$('button.cancle').click(function() {
       $("input#exampleInputPassword1").val('');   // 그 newValue값을 input#password에 뜨게 한다
});
   
// 취소 버튼을 누르면 비밀번호를 입력하시오 의 값이 없어진다
$('button.cancle2').click(function() {
       $("input#exampleInputPassword2").val('');   // 그 newValue값을 input#password에 뜨게 한다
});
   
    
//비밀 번호를 입력하시오 칸을 누르면 발생하는 이벤트 
$('#exampleInputPassword1').click(function() {
		 
		 //#모드의 부모의 text가 찾기 모드라면
		 if( $('#mod', parent.document).text() == "찾기모드") {
		 	// 찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 보여준다 // 비밀번호를 입력하시오 창의 키패드
		 	$(".password2").css( 'display','inline-block');
		 	//찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 한번 더 입력하시오 창의 키패드
		 	$(".password2Under").css( 'display','none');
		 	//class가 password2인하위태그를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
		  	$('.password2').attr("tabindex", -1).focus();
		}
		 
		else{
			//보관 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 보여준다 // 비밀번호를 입력하시오 창의 키패드
			$(".password").css( 'display','inline-block');
			//보관 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 한번 더 입력하시오 창의 키패드
			$(".passwordUnder").css( 'display','none'); }
			//class가 password인하위태그를 찾고 이것의 속성에 tabindex 라는 것을 추가하고 그 값은 -1로 설정한다.그리고 포커스 함수를 호출한다.
	  		$('.password').attr("tabindex", -1).focus();
});
		   
//비밀 번호를 한번 더 입력하시오 칸을 누르면 발생하는 이벤트 	 
$('#exampleInputPassword2').click(function() {
	
		//#모드의 부모의 text가 찾기 모드라면  
		if( $('#mod', parent.document).text() == "찾기모드"){
			// 찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 한번 더 입력하시오 창의 키패드
			$(".password2").css( 'display','none');
			// 찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 입력하시오 창의 키패드
			$(".password").css( 'display','none');
			// 보관 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 입력하시오 창의 키패드
			$(".passwordUnder").css( 'display','none');
			// 보관 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 한번 더 입력하시오 창의 키패드
   			$(".password2Under").css( 'display','inline-block');
   			}
   		  
   		else{
			// 찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 보여준다 // 비밀번호를 입력하시오 창의 키패드 	
			$(".password").css( 'display','none');
			// 찾기 버튼을 눌렀을 때 뜨는 비밀번호 키패드 를 숨긴다 // 비밀번호를 한번 더 입력하시오 창의 키패드
   		  	$(".passwordUnder").css( 'display','inline-block');
  			}
});

//비밀번호 경고창에 포커스 이동시 발생하는 이벤트
$('#worning').focus(function(){
	 //비밀번호 경고창 외곽선 안보이게
	 $(this).css('outline','none');
});

		
}); //end of window