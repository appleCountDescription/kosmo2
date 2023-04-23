<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	$('button#melon').click(function(){
		$.ajax({
			url  : './jsp/proxy_melon.jsp',
			success : function(data){
				
				var songchart = $('.typeRealtime > ul > li', data);
				// 대상 : data
				// 그 대상에서 찾고자 하는 선택자
				
				$('#result').empty();
				songchart.each(function(){
					var img = $('.thumb img', this);
					$('#result').append(img);
					
					var songTitle = $('.song', this).text();
					$('#result').append(songTitle);
					
					var artist = $('.artist', this).text();
					$('#result').append(artist + "<br/>");
				});
				
			}
		});
	});
});
</script>
</head>
<body>


<button id='melon'>멜론</button>
<button id='nate'>네이트</button>
<hr/>
<div id='result'></div>

</body>
</html>