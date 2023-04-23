<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>
<form  action="EmpSave.jsp" method="get">
<label> 회원가입서 작성하기</label>
<table>
<tr>
<td>아이디
<input type ="text" id= "ids" pattern="[0-9a-z]{5,10}" required  placeholder="5자~10자 영어와 숫자조합">
<input type ="button" value ="중복확인" ></td>
</tr>
<tr>
<td>비밀번호	<input type ="password" id ="password" placeholder="4자 이상 영어와 숫자조합" pattern="[0-9a-z]{4,}" required ></td>
</tr>
<tr>
<td>비밀번호 확인	<input type ="password" id ="passwords" required></td>
</tr>
<tr>
<td> 이름     <input type ="text" id="name"  placeholder="한글5자이내"pattern="[ㄱ-힝]{2,5}"required></td>
</tr>
<tr>
<td> 전화번호		<input type ="text" id="tel" placeholder="-없이숫자조합" required></td>
</tr>
<tr>
<td>주소	<input type ="text" placeholder="20자이내" id="addr" required></td>
</tr>	
<tr>
<td><input type ="submit" value="회원가입"></input></td>
<td><input type ="reset" value="취소"></input></td>
</tr>
</table>
</form>
</body>
</html>