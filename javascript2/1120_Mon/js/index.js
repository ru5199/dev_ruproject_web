

function button(sitename){
    var site
    if(sitename === 'naver'){
        site ='네이버';
    }else if(sitename === 'daum'){
        site ='다음';
    }
    var check = confirm(site+'로 가시겠습니까?');

    if(sitename === 'naver' && check){
            window.open("https://www.naver.com");
    } else if(sitename === 'daum' && check){
            window.open("https://www.daum.net");
    }

}

function button2(){
    var check2 = confirm('Naver로 가시겠습니까?');
    if(check2){
        window.open("https://www.naver.com");
    }
}

function text(){
    alert('세 글자 이상 입력해야 합니다.');
}

function text2(){
    /*alert('세 글자 이상 입력해야 합니다.')*/
}

function a_js(){

}
