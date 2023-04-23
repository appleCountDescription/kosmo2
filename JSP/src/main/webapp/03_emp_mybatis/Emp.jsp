<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="emp.mybatis.*, java.util.*" %>
    
<%
	EmpRepo repo = new EmpRepo();
	List<EmpVO> list = repo.selectEmp();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h2>사원정보</h2>
<!-- 출력 -->

<table border="1">
	<% for( EmpVO emp : list ) { %>
		<tr>
			<td><%= emp.getEmpno() %></td>
			<td><%= emp.getEname() %></td>
			<td><%= emp.getJob() %></td>
			<td><%= emp.getDeptno() %></td>
		</tr>
	<% } %>
</table>

</body>
</html>