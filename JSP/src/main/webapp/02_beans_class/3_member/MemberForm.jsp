<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 회원가입  </title>
<script type="text/javascript">
	function openWin(){
		var id = document.frm.id.value;
		//window.open("CheckId.jsp?userId="+id,"","width=200, height=150");
	}

$(function(){
	$('input:button').click( function(){
		$.ajax({
			url  : 'CheckId.jsp',
			data : { id : $('input[name="id"]').val() },	//dataType 따로 안 써도 됨, 왜냐면 디폴트가 text이기 때문
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

<h1>회원가입서 작성하기</h1>
 
	<form action="InsertMember.jsp" method="post" name="frm">
		<table>
			<tr>
				<td width="100">
				<font color="blue">아이디</font>
				</td>
				<td width="100">
				<input type="text" name="id">
				<input type="button" value="중복확인" onclick="openWin()"><br/>
				</td>
				<td width="100">
				<div id="idmessage" style="display:none;"></div>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">비밀번호</font>
				</td>
				<td width="100">
				<input type="password" name="password"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">비밀번호학인</font>
				</td>
				<td width="100">
				<input type="password" name="repassword"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">이름</font>
				</td>
				<td width="100">
				<input type="text" name="name"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">전화번호</font>
				</td>
				<td>
				<input type="text" size="15" name="tel"/>
				<br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">주소</font>
				</td>
				<td>
				<input type="text" size="50" name="addr"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				 <!--로그인 버튼-->
				 <input type="submit" value="회원가입">
				</td>
				<td width="100">
				<input type="reset" name="cancel" value="취소"><br/>
				</td>
			</tr>
		</table>
	</form>



 </body>
</html>
    