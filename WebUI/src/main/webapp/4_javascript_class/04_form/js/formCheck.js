window.onload = function(){

      var frm = document.getElementById('frm');
      //var inputs = document.querySelectorAll("input");
      
      frm.onsubmit = function(e){
         //이벤트 중지
         e.preventDefault();
         
         //유효성검사
         var agree = document.querySelector('#agree');
         if(!agree.checked){
            alert('반드시 약관을 확인하세요!!!!!!')
            return;
         };
         
         //다시 전송
         frm.submit();
      }
      


}