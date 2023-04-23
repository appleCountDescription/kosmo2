$(function(){
	
	var topDiv = $('.tabSet');	// tabSet 클래스의 객체를 topDiv 변수에 할당
	var anchors = topDiv.find('ul.tabs > li > a');	// topDiv 객체 내 a 값을 find해서 anchors 변수에 할당
	var panelDivs = topDiv.find('div.panel');	// topDiv 객체 내 'div.panel' 값을 panelDivs 변수에 할당

	anchors.show();	// anchors를 보여줌
	panelDivs.hide();	// panelDivs를 숨김

	var lastAnchor = anchors.filter('.on');		// anchors 객체에서 filter 메소드로 on인 요소만 선택해 lastAnchor 변수에 저장. 근데 on이라는 클래스가 따로 없으므로, JavaScript 코드에 동적으로 추가되거나 변경될 수 있음
	var lastPanel = $(lastAnchor.attr('href'));	// lastPanel에 $('#panel1-1'), 즉 객체가 들어옴(href값을 가져옴)
	lastPanel.show();	// lastPanel을 보여줌
	
	anchors.click(function(evt){
		evt.preventDefault();	// 브라우저의 기본동작을 취소
		
		var currentAnchor = $(this);	// this는 클릭을 가리킴
		var currentPanel = $(currentAnchor.attr('href'));
		
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor = currentAnchor;
		lastPanel = currentPanel;
		
	});

});