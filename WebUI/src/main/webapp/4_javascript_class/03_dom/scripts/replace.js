
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
	list.onclick = function(evt) {
		var isbn = evt.target.getAttribute('data-isbn');
		//alert(isbn);
	
		if(isbn){
			//<img src = '경로' height='150' width='108'/>
			var img = document.createElement('img');
			img.src = './images/' + isbn + '.jpg';
			img.height = 150;
			img.width = 108;
			
			
			if (pic.getElementsByTagName('img').length > 0){
				pic.replaceChild(img, pic.lastChild);
			}else{
				pic.appendChild(img);
				del.disabled = false;
			}
			
		}
		
	}
	
	pic.onclick = function(evt) {
		alert('');
	}
	
	del.onclick = function(evt) {
		alert('');
	}

  
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
  

  	del.onclick = function() {
		pic.removeChild(pic.lastChild);
		del.disabled = true;			
	}

  
  
//};
