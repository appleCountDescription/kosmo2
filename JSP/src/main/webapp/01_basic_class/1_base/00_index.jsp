<%@ page language="java"
		 contentType="text/html; charset=UTF-8"
    	 pageEncoding="UTF-8"%>

<%! String name = "홍";%>  <!-- 전역변수 -->
<% String msg = "화이팅"; %><!-- 지역변수 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%= name %>님, 안녕하세요<hr/>
<%= msg %>

<!-- html 주석이 먹힌다 당연히 html 영역이니 /화면단까지 와서야 빠진다 -->
<%// 자바 주석 //두번째로 빠진다%>
<%/*자바 주석*/%>
<%-- JSP 주석  /가장먼저 빠진다 --%>



</body>
</html>