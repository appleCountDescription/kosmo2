<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title> 아이디 중복 검사 </title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	// 요즘 트렌드: '중복확인' 버튼 클릭
	//$('button#id_check').click(function(){
		
		
	// 극적인 효과를 위해 함 => 나중에 하지 말자
	$('input.userinput').keyup( function(){
		$.ajax({
			url  : 'IdCheck.jsp',
			data : { id : $('input.userinput').val() },	//dataType 따로 안 써도 됨, 왜냐면 디폴트가 text이기 때문
			success : function(data){
				//alert(data);
				if( data.trim() == 'YES' ){
					$('div#idmessage').text('이미 사용 중인 아이디입니다');
					$('div#idmessage').show();					
				}else{
					$('div#idmessage').text('사용 가능한 아이디입니다.');
					$('div#idmessage').show();					
				}
			},
			error : function(err){
				alert('error');
				console.log(err);
			}
		});
	});
});
</script>

</head>
<body>

<input name="id" type="text" class="userinput" size="15" />
<button type="button" id="id_check">중복체크</button><br/><br/>
<div id="idmessage" style="display:none;"></div>

</body>
</html>