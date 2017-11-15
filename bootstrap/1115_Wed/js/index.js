/*
var name = "John" ;
var name2 = 'Jane' ; //"문자" = '문자' 같은 표현임(자바스크립트에서만)
var number = 20 ;
var check = true ;
var check2 = false ;

function displayCon(){  // 얘는 변수가 아니라 함수 자체이기 때문에 배열에 넣을 수 없음
    console.log("안녕하세요.") ;
}

var displayCon2 = function () { //변수는 변하는 값을 저장하는 것(일종의 수) 값을 가르키는 주소를 알려줌 배열에 변수로서 들어갈 수 있음
    console.log("안녕하세요 2...") ;
}

var arr = ["John", "Jane", "Mark", "Tom"] ;
var arr2 = new Array("John1", "Jane2", "Mark2", "Tom2");
var arr3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] ;
var arr4 = ["John", 11, true, arr2, displayCon2]; //배열에도 (변수화 된) 함수를 넣을 수 있음

document.write(arr) ;
var tag = "<h1>안녕하세요</h1>" ;
document.write(tag) ;
*/
/*
var num = 10 ;  console.log(num) ; // 10

num = num + 1 ;  console.log(num) ; //11
num++ ;  console.log(num) ; //12
num +=1 ;  console.log(num) ; //13 모두 +1 을 뜻하는 코드

num +=3 ; console.log(num) ; // num = num + 3 , 16

for(var i=0 ; i < 10 ; i+=2){
    console.log(i);
}
//짝수 출력

//var num3 = 10/2 ;
//var num4 = 11%2 ;
var number = 0 ; //
var name4 = "Ru" ;

if(number){
    console.log("number true") ;
} else{
    console.log("number false") ;
}

if(name4){
    console.log("name4 true") ;
} else{
    console.log("name4 false") ;
}


for(var i=0 ; i < 10 ; i++){
    if( (i%2) == 0){
        console.log(i)
    }
}

for(var i=0 ; i < 10 ; i++){
    if( (i%2) ){
        console.log(i)
    }
}
*/
/*
for(var i = 0 ; i <10 ; i++){
    if(i == 1){
        console.log("안녕하세요.");
    }else if(i == 5){
        continue ; // continue가 속해있는 조건만 실행하지 않고 나머지는 실행함
        console.log("절반입니다.");
    }else if(i == 8){
        console.log("거의 끝나갑니다.");

    }else {
        console.log(i + " num");
    }
}
*/
/*
for(var i = 0 ; i <10 ; i++){

    if(i <= 7){
        continue ;
    }else if(i == 8){
        console.log("거의 끝나갑니다.");
    }else {
        console.log(i + " num");
    }

}

// <=, >=
*/
/*
for(var i = 0 ; i <10 ; i++){

    if(i > 3 && i <= 7){
        console.log("안녕하세요.") ;
    }else if(i == 8){
        console.log("거의 끝나갑니다.");
    }else {
        console.log(i + " num");
    }

}
*/
/*
var i = 0;
*/
/*
// i가 10보다 크거나 같을 때 빠져나온다.
while(true){  // true or false 만 출력

    i++ ;

    if(i >=10){
        break ;
    }

    console.log("안녕하세요. : ["+i+"]");
}
*/
/*
while(i < 10){  // true or false 만 출력


    console.log("안녕하세요. : ["+i+"]") ;
    i++ ; // i++ 의 위치가 console 위로 가면 기본 i 에서 + 1 된 값부터 나오고, console 밑으로 내려가면 i 그대로 더해지기 시작

}*/


//console.log(col3) ;
//console.log(col.length) ;
/*
for(var i = 0 ; i < col7.length ; i++){
    console.log(col7[i]) ; //개별 원소들이 출력
}
*/
//col.push(11);
//console.log(col) ;
/*
var col10 = [] ; //100~120 ; //var col10 = new Array() ;

for(var i = 100 ; i <= 120 ; i++){
    col10.push(i);
}

console.log(col10);
*/
/*
var col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;
var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] ;
var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ;
var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] ;
var col5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] ;
var col6 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70] ;
var col7 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80] ;
var col8 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90] ;
var col9 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100] ;

var row = [col, col1, col2, col3, col4, col5, col6, col7, col8, col9] ;

//console.log(row[0][0]); // 이차원 배열, col의 0번째니까 1이 출력
//console.log(row[8][1]);

for(var i = 0 ; i < row.length ; i++){

    console.log(row[i]);
    for(var n = 0 ; n < row[i].length ; n++){
        console.log(row[i][n]);
    }
}
*/
//1~100 까지 입력하고, 출력하는 2차원 배열

var arr = [];

for(var i = 0 ; i < 10 ; i++){

    arr[i] = [];

    for(n = 0 ; n < 10 ; n++){
        var num =i*10 + n+1;
        arr[i][n] = num;
        //console.log(arr[i][n]);
    }
}

for(var i = 0 ; i < arr.length ; i++){

    //console.log(arr[i]);
    for(var n = 0 ; n < arr[i].length ; n++){
        console.log(arr[i][n]);
    }
}