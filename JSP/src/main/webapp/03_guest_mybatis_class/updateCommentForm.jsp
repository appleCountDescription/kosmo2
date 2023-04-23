<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String commentNo = request.getParameter("commentNo");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<form name="frm" action="updateCommentSave.jsp">
<table>
	<tr><td>글번호</td><td><input type="text" name="commentNo" size="3" readonly="true" value=<%= commentNo %>></td></tr>
	<tr><td>사용자</td><td><input type="text" name="userId" size="15"/></td></tr>
	<tr><td>메시지</td><td><textarea type="text" name="commentContent" rows="10" columns="40" ></textarea></td></tr>
	
	<tr><td><input type="submit" value="수정"/></td></tr>
</table>


</form>


</body>
</html>