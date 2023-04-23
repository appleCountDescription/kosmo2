<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	//한글처리
		
	request.setCharacterEncoding("utf-8");

	// 이전화면에서 사용자 입력값을 받기
	String user = request.getParameter("User");//대소문자 구분하기
	String pass = request.getParameter("Pass");// Pass 여기에 소문자를 쓰면 null값 나옴
	//나중에 JDBC 연동
%> 
   
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 폼의 입력값 처리 </title>
</head>
<body>

	
	<h2>폼의 입력값 넘겨받아 처리</h2>
	입력한 아이디 : <%= user %> <br/>
	입력한 패스워드 : <%= pass %>
</body>
</html>