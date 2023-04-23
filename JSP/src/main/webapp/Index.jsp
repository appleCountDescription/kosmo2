<%@ page contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ page import="java.sql.*"%>

<% 

	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:xe";
	String user = "scott";
	String pass = "tiger";
	

	// 1. 드라이버 로딩
	Class.forName(driver);
	
	// 2. 연결객체 얻어오기
	Connection con = DriverManager.getConnection(url, user, pass);
	
	// 3. SQL 문장
	String sql = "INSERT INTO emp(empno, ename, sal) VALUES(SEQ_TEMP_NO2.nextval, '고다인', 20000)";
	
	// 4. 전송객체 얻어오기
	PreparedStatement ps = con.prepareStatement(sql);

	// 5. 결과받기
	ps.executeUpdate();
	
	// 6. 닫기
	ps.close();
	con.close();
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>



</body>
</html>