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