function checked(){  //form 유효성 검사 
    var p = document.getElementById('pw'); 
    var p_cf = document.getElementById('pw_cf'); 
    var nameCheck = document.getElementById("name");
    var named= RegExp(/^[가-힣]+$/)

//이름 유효성 검사
if(!named.test(nameCheck.value)){
    alert("이름형식에 맞게 입력해주세요")
    nameCheck.value= "";
    nameCheck.focus();
    return false;
}

else { 
    return true; 
 } 
}

function is_checked() {
  
    // 1. checkbox element를 찾습니다.
    const checkbox = document.getElementById('my_checkbox');
  
    // 2. checked 속성을 체크합니다.
    const is_checked = checkbox.checked;
    
  }