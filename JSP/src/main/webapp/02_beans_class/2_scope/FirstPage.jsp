<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<%  //--------------------------- 값 지정
	pageContext.setAttribute("name", "KIM");
	request.setAttribute("name", "SEUNGMIN");
	session.setAttribute("name", "DOKDO");
	application.setAttribute("name", "KOREA");
	//application.log("FirstPage.jsp : " + pageContext.getAttribute("name") + "님 접속");
%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 첫번째 페이지 </title>
</head>
<body>

하나의 페이지 속성 : <%= pageContext.getAttribute("name") %> <br>		<%-- request.getParameter와  request.getAttribute 차이 구분하기 --%>
하나의 요청 속성 :	 <%= request.getAttribute("name") %> <br>		<%-- request.getParameter:  --%>
하나의 세션 속성 :	 <%= session.getAttribute("name") %> <br>		<%-- request.getAttribute:  --%>
하나의 어플리케이션 속성 : <%= application.getAttribute("name") %> <br>

<!-- #############  -->
<!-- 페이지 forward 이동된다면  -->
<a href='SecondPage.jsp'>다음페이지</a>
<%-- <% response.sendRedirect("SecondPage.jsp"); %> --%>
<jsp:forward page = "SecondPage.jsp"/>

</body>
</html>