<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page pageEncoding="UTF-8"%>
<%@ page errorPage="02_NormalErrorPage.jsp" %>

<% // 서블릿 파일에서 예외 처리를 하기 때문에 try catch를 안써도 된다
	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@192.168.0.55:1521:xe";
	String user = "scott";
	String pass = "tiger";

	// 1. 드라이버 로딩
	Class.forName(driver);
	// 2. 연결객체	
	Connection con = DriverManager.getConnection(url,user,pass);
	// 3. sql 문장 만들기
	String sql = "SELECT * FROM emp";
	// 4. 전송객체 얻어오기
	PreparedStatement ps = con.prepareStatement(sql);
	// 5. 결과받아오기
	ResultSet re =  ps.executeQuery();	
%>

<!DOCTYPE html>
<html><head><title> 디비 테스트 </title>
</head>
<body>
 
<div align=center>
<table border=2 cellSpacing=3>

  <tr class="title">
    <td>사번</td>
    <td>사원명</td>
    <td>업무</td>
    <td>관리자사번</td>
    <td>입사일</td></tr>

	<!-- (6) 결과출력 -->
<% while(re.next()){ %>
	  <tr>
		<td><%=re.getInt("EMPNO")%></td>
		<td><%=re.getString("ENAME")%></td>
		<td><%=re.getString("JOB") %></td>
		<td><%=re.getInt("mgr") %></td>
		<td><%=re.getDate("hiredate") %></td>
	  </tr>
<% } // end of while %>

</table>
</div>
</body>
</html>
