<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="emp.mybatis.*, java.util.*" %>
    
<%


	String pageNo = request.getParameter("pageNo");
	List<HashMap> list = EmpService.getInstance().selectEmpPage(pageNo);
	int totalRec = EmpService.getInstance().countEmp();
	
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
	<tr>
		<td>사번</td>
		<td>사원명</td>
		<td>업무</td>
		<td>부서명</td>
		<td>위치</td>
	</tr>
	<% for( HashMap vo : list ) { %>
		<tr>
			<td><%= vo.get("EMPNO") %></td>
			<td><%= vo.get("ENAME") %></td>
			<td><%= vo.get("JOB") %></td>
			<td><%= vo.get("DNAME") %></td>
			<td><%= vo.get("LOC") %></td>
		</tr>
	<% } %>
</table>

<hr/>
<input type="button" id="prev" value="이전"></input>
<%	int i=1; %>
	<a href="EmpDept.jsp?pageNo=<%=i%>">[<%=i%>]</a> 
	<a href="EmpDept.jsp?pageNo=<%=i+1%>">[<%=i+1%>]</a> 
<input type="button" id="next" value="다음"></input>

</body>

</html>