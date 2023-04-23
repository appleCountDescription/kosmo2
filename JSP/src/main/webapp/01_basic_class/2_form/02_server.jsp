<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
    
<% 	
request.setCharacterEncoding("utf-8");

	// 1.이전화면의 값을 얻어오기 
	String name = request.getParameter("name");
	String gender = request.getParameter("gender");
	String occupation = request.getParameter("occupation");
	String [] hobby = request.getParameterValues("hobby");
%>    
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- 2.얻어온 값들 출력하기 -->
<h2>폼의 입력값 넘겨받아 처리</h2>
입력한 아이디 : <%=name %><br/>
체크한 성별 : <%= gender %><br/>
체크한 직업 : <%=occupation %><br/>
체크한 취미 : <%for(int i =0; hobby!=null && i<hobby.length;i++){%>
			<%= hobby[i] %> 
			<% //hobby!=null && i<hobby.length; 취미가 null이 아니라면 취미의 길이 만큼 i를 증가시킨다
			//hobby!=null 이게 없으면 nullpointexception이 뜬다%>
			<%	}//end of hobby %>
</body>
</html>