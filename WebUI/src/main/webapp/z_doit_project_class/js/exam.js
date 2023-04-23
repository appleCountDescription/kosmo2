/**
 * 1. 오늘 날짜 찍기 - 1번 10점
 * 2. 마우스를 클릭하면 검색어를 입력하시오 글씨가 없어져야 함. 클릭 취소하면 글씨가 다시 나타나야 함 - 10점
 * 3. 탭팬이 나와야 함 - 10점
 * 4. bxSlider - 10점
 * 5. 보였다 안 보였다 - 20점
 * 6. 보였다 안 보였다 - 20점
 * 7. 추가적으로 더 구현하면
 * 
 */

 
$(function(){
	 
	// 1번
	$('.year').text(new Date().getFullYear());
	$('.month').text(new Date().getMonth()+1);
	$('.date').text(new Date().getDate());
	 
	// 2번
	$('#keyword').click(function(){
		$(this).css('background-position-x', '-1000px'); 
	});
	$('#keyword').blur(function(){
		$(this).css('background-position-x', '0px'); 
	});
	
	// 3번 : 탭팬
	//$('').click(function(){})
	var onTab = $('#tabmenu dt a:first');
	$('#tabmenu dt a').on("click mouseover focus", function(){
		
		$('#tabmenu dd:visible').hide();	// 현재 보이고 있는 dd(내용)를 감추고
		
		//onTab에 할당된 요소의 자식(하위) <img>의 src 속성
		var onTabImg = onTab.find('img');
		onTabImg.attr('src', onTabImg.attr('src').replace('over.gif', 'out.gif'));
		
		$(this).parent().next().show();		// 이벤트가 발생한 a의 부모 dt 다음 요소인 dd(내용)를 보여주기
		
		//이벤트가 발생한 요소의 하위 <img>의 src 속성을 다시 변경
		var thisImg = $(this).find('img');
		thisImg.attr('src', thisImg.attr('src').replace('out.gif', 'over.gif'));
		
		onTab = $(this);
		
	});
	
	// 4번
	$('#best_bg ul').bxSlider({
		minSlides : 5,
		maxSlides : 5,
		slideMargin : 40,
		slideWidth : 150,
		auto : true,
		moveSlides : 2
	});
		
	//5번
	$('.util_first img:eq(0)').click(function(){
		$('#login_f').css('top', '20px'); 
	});
	$('.login_close_btn').click(function(){
		$('#login_f').css('top', '-500px'); 
	});

	//6번
	$('#total_btn img').click(function(){
		$('#total_menu').show(); 
	});
	$('#total_close img').click(function(){
		$('#total_menu').hide(); 
	});
	
	
});