<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="board_mybatis.model.*, board_mybatis.service.*" %>
 <% 
 	request.setCharacterEncoding("utf-8");
 %> 

 <jsp:useBean id="board" class="board_mybatis.model.BoardRec">
 	<jsp:setProperty name="board" property="*"/>
 </jsp:useBean>   
<%

	String articleId = request.getParameter("articleId");
	String password = request.getParameter("password");

	// 1. 삭제할 레코드의 게시글번호와 비밀번호를 넘겨받기
	BoardRec rec = new BoardRec();
	rec.setArticleId(Integer.parseInt(articleId));
	rec.setPassword(password);
	
	boolean isDeleted = DeleteArticleService.getInstance().deleteBoard(rec);
	 
	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 게시글 삭제 </title>
</head>
<body>

	<% if( isDeleted ) { %>
			글을 삭제하였습니다.
	<% } else { %>
			삭제가 실패되었습니다.
	<% } %>
	<br/><br/>
	<a href="BoardList.jsp"> 목록보기 </a>
</body>
</html>  