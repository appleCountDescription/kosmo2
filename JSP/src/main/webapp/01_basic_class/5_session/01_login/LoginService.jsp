<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<%@ page import = "temp.*" %>
    
<%
	// 0. 한글처리
	request.setCharacterEncoding("utf-8");
%>
    
<!DOCTYPE html>
<html>
<head>
<title> 로그인확인 </title>
</head>
<body>
<%

	// 실제로는 DB에서 가져와야하는 값
	EmpDAO dao = EmpDAO.getInstance();
	
	// 이전화면 폼에서 넘겨받는 값
	String user = request.getParameter("User");	// Q1. request.getParameter로 얻어온 User는 LoginForm에 있는데, 이건 import도 안 했는데 어떻게 인식하고 가져옴?
	String pass = request.getParameter("Pass");
			
	// user, password가 같을 때 로그인 성공, 그렇지 않으면 로그인 실패
	if( dao.checkLogin(pass, user) ){	// 이 조건문 자체는 true를 의미한다.
		// #2. 세션에 "id"라는 이름에 변수 user 값을 저장
		session.setAttribute("id", user);

		// #1. 로그인 성공하면 바로 MainPage.jsp를 요청
		response.sendRedirect("MainPage.jsp");

	} else {

		// #1. 로그인에 실패하면 바로 LoginForm.jsp을 요청
		response.sendRedirect("LoginForm.jsp");

	}			
%>
	
</body>
</html>