alert('ok');

window.onload = function(){

	var cell = document.getElementsByClassName('item');
	
	for (var i=0; i<cell.length; i++){
		
		cell[i].onclick = function(){
			// alert('OK');
			// (2) 각 쉘(td)에 클릭하면 해당 price값을 메시지창(alert)으로 확인
			var price = this.getAttribute('price');
			alert(price);
		}
		
	}
	
}

