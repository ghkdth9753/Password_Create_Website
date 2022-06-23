function check_pw(){  //비밀번호 확인 
    var p = document.getElementById('pw').value; 
    var p_cf = document.getElementById('pw_cf').value; 
 
    if (p!=p_cf) { 
      document.getElementById('pw_check_msg').innerHTML = "비밀번호가 다릅니다. 다시 확인해 주세요."; 
    } 
    else { 
        document.getElementById('pw_check_msg').innerHTML = ""; 
    } 
    if (p_cf=="") { 
      document.getElementById('pw_check_msg').innerHTML = ""; 
    } 
 }



function checked(){  //form 유효성 검사 
    var p = document.getElementById('pw'); 
    var p_cf = document.getElementById('pw_cf'); 
    var nameCheck = document.getElementById("name");
    var named= RegExp(/^[가-힣]+$/)


 if (p.value != p_cf.value) {  //비밀번호 확인 
    alert("비밀번호가 일치하지 않습니다. 확인해 주세요"); 
    p_cf.focus(); 
    return false; 
 }

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