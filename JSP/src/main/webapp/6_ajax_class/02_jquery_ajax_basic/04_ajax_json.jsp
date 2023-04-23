<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
	<script>
	$(function(){
		$.ajax({
			type : 'post',
			data : { cate : 'IT', name : 'java' },
			url  : '04_server.jsp',
			dataType : 'text', 		// 'json'은 라이브러리가 필요
			success : function(resData){
				//json 라이브러리로 받았다면 아래 코드는 필요없음
				
				var obj = {};
				obj = eval("(" + resData + ")");
				
				$('#cate').val( obj.first );
				$('#name').val( obj.second );
			}
		});
	})
	    
	</script>
</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


