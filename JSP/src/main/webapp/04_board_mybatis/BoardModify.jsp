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
	String title = request.getParameter("title");
	String content = request.getParameter("content");


	// 1. 삭제할 레코드의 게시글번호와 비밀번호를 넘겨받기
	BoardRec rec = new BoardRec();
	rec.setArticleId(Integer.parseInt(articleId));
	rec.setPassword(password);
	rec.setTitle(title);
	rec.setContent(content);
	
	boolean isUpdated = ModifyArticleService.getInstance().updateBoard(rec);
	 
	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>게시판글수정</title>
</head>
<body>

<%  // 게시글 수정이 성공적으로 되었다면 그 해당 게시글을 보여주는 페이지로 이동하고
    // 그렇지 않다면, "암호가 잘못 입력되었습니다"를 출력
	// result가 0이 아닐 경우 BoardView.jsp로 이동 %>
	
<%	if (isUpdated) 
		// JSP 내장 객체인 response의 sendRedirect() 메소드를 이용하여 이동
		response.sendRedirect("BoardView.jsp?articleId=" + request.getParameter("articleId"));
	
	else %>
		<h1>암호가 잘못 입력되었습니다.</h1>


 

</body>
</html>