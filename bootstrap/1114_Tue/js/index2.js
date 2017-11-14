/*function first(par){
    console.log('test') ;
}

var first2 = function(par){
    console.log('test')
}*/
// 둘 다 동일한 함수 선언 방법

var names = ['John', 'Jane', 'Mark'] ;
              //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
var numbers = [10,11,12,13,14,15,16,17,18,19] ;
var testArr = [1, 'John', true, names] ;

//자바 스크립트의 경우 한 배열에 여러 속성의 코드를 넣어도 되지만 자바는 불가능(스트링은 스트링만, 숫자는 숫자만)

//document.write(names);
//console.log(names);
//document.write("<br>");
//document.write(testArr);
//console.log(testArr);

//console.log(names[2]);
//names.push("Log");

//console.log(names) ;
//names.pop();
//var popStr = names.pop(); //꺼낸 것을 확인하고 싶을 때
//console.log(popStr);


//console.log(names[names.length-1]);//length -> 배열 안에 몇개의 글자가 있는지, length-1은 항상 마지막번째 글자를 가져옴
//console.log(names[-1]);

//console.log(names.indexOf('Jane'));
//console.log(names.indexOf('log4'));//배열 안에 존재한 위치를 찾을 때

//초기값; 비교해서 참/거짓; 액션
/*console.log("length="+names.length);
for(var i=0; i < names.length ; i++) {
    console.log(names[i]);
}
*/
console.log("length="+numbers.length);
for(var i=0; i < numbers.length ; i++) {

    if(i < 3 || i > 5){
        //console.log(numbers[i]);

        if(numbers[i] == 17){
            console.log("17입니다.");
            //break ; //for문의 끝. 중단하고 for문에서 나온다.
        }else {
            console.log(numbers[i]);
        }
        //값이 17이면 "17입니다." console 출력
    }

    else {
        console.log("-------"+numbers[i]+"-------");
    }
}
    /*} else if(i > 5){
        console.log(numbers[i]);
    }*/

/*
if(3 || 5){
    console.log("숫자를 출력하세요.")
}
if( 3 && 5){
    console.log("숫자를 출력하세요.")
}*/