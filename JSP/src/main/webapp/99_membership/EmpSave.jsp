<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import = "temps.*" %>


<%
	// 1. 사용자 입력값 얻어오기 syso
	// 콘솔에 찍기
	//getParameter 문자열만 받는다
	String ids = request.getParameter("ids");
	String password = request.getParameter("password");
	String passwords = request.getParameter("passwords");
	String name = request.getParameter("name");
	String tel = request.getParameter("tel");
	String addr = request.getParameter("addr");
	


	// 2. 사용자 입력값들을 VO 멤버변수로 지정
	EmpVO vo = new EmpVO();
	
	vo.setIds(ids);
	vo.setPassword(password);
	vo.setPasswords(passwords);
	vo.setName(name);
	vo.setTel(tel);
	vo.setAddr(addr);
	
	// 3. DAO에 함수 호출
	EmpDAO dao = EmpDAO.getInstance();
	try{
	dao.insert(vo);
	}catch(Exception e){
		e.printStackTrace();
	} //  throws SQLException 예외를 던졌기에 받아줘야한다  
	

	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 등록 </title>
</head>
<body>
	 성공적으로 입력되었지 DB에서 확인합니다.
</body>
</html>