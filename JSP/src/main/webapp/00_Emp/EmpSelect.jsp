<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="temp.*" %>
<%@ page import="java.util.*" %>
   
<%	
 	EmpDAO dao = EmpDAO.getInstance();
	ArrayList<EmpVO> list = new ArrayList<EmpVO>();

try{
	
 	list = dao.selectAll();
	}catch(Exception ex){
	ex.printStackTrace();
}
%>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>EmpSelect</title>
</head>
<body>
<h1>사원정보 목록</h1>
<table>
<tr>
<td> 사번 </td>
<td> 사원명 </td>
<td> 월급 </td>
<td> 업무 </td>
<td> 부서번호 </td>
</tr>
<%for(EmpVO vo : list){%>
<tr>
<td><%= vo.getEmpno() %></td>
<td><%= vo.getEname() %></td>
<td><%= vo.getSal() %></td>
<td><%= vo.getJob() %></td>
<td><%= vo.getDeptno() %></td>
</tr>
<% }%>


</table>
</body>
</html>