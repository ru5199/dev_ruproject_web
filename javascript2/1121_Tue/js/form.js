function check() {
    //alert('check 입니다.');
    //var name = document.frm.name.value ;
    var name = document.getElementById('name').value ;
    //console.log(name);
    //var id = document.frm.id.value ;
    var id = document.getElementById('id').value ;
    var password = document.frm.password.value ;
    var password2 = document.frm.password2.value ;
    var name_error = document.getElementById('name_error').value;
    var id_error = document.getElementById('id_error').value;
    var password_error = document.getElementById('password_error').value;
    var password2_error = document.getElementById('password2_error').value;

    if(name == ""){
        alert('이름을 입력하세요.');
        document.frm.name.focus();
        document.getElementById('name_error').textContent = '이름을 작성해 주세요.' ;
        return false;
    }
    document.getElementById('name_error').style.display = 'none';

    if(id == ""){
        alert('아이디를 입력하세요.');
        document.frm.id.focus();
        document.getElementById('id_error').textContent = '아이디를 작성해 주세요.' ;
        return false;
    }
    document.getElementById('id_error').style.display = 'none';

    if(password == ""){
        alert('패스워드를 입력하세요.');
        document.frm.password.focus();
        document.getElementById('password_error').textContent = '비밀번호를 작성해 주세요.' ;
        return false;
    }
    document.getElementById('password_error').style.display = 'none';

    if(password2 == ""){
        alert('패스워드 확인을 입력하세요.');
        document.frm.password2.focus();
        document.getElementById('password2_error').textContent = '비밀번호 확인을 작성해 주세요.' ;
        return false;
    }
    document.getElementById('password2_error').style.display = 'none';

    if(password !== password2){
        alert('패스워드가 일치하지 않습니다.');
        document.frm.password2.value = "";
        document.frm.password2.focus();
        return false ;
    }

    var check2 = confirm('입력된 데이터를 서버로 전송합니다.');
    if(check2){
         console.log("name="+name+", id="+id );
         document.frm.submit();
    }else {
        return false ;
    }
    //document.frm.action="server_send.py" ;

}