/*
function calculateAge(birth) {
    var age = 2017- birth;
    return age;
}
var ageJohn = calculateAge(1990) ; //2017-1990
// console.log(ageJohn);
*/
/*
function sum(one, two){
    var test2 = one + two;
    return test2;
}

function minus(one, two){
    var test3 = one - two;
    return test3;
}

function mul(one, two){
    var test4 = one * two;
    return test4;
}

function calculate(num1, num2, oper){
    var test5;
    if(oper == "+"){
        test5 = sum(num1, num2);
    } else if(oper == "-"){
        test5 = minus(num1, num2);
    } else if (oper == "*"){
        test5 = mul(num1, num2);
    }
    return test5
}


var one = 2;
var two = 5;
var operator = "*" ;
//document.write("("+one+" + "+two+") ="+sum(2, 5));
//document.write("<br/>("+one+" - "+two+") ="+minus(2, 5));
//document.write("<br/>("+one+" * "+two+") ="+mul(2, 5));
document.write("("+one+operator+ two+") ="+calculate(one, two, operator));
*/

/*이름, 년도(출생일)
은퇴 65세, 2017
얼마나 남았는지
남았으면 얼마나 남았습니다.
오버됐으면 이미 은퇴 했습니다.

html 브라우저 출력
*/
//나이, 일한 기간
function checkRetirement(age, workPeriod){    //함수 명이 checkRetirement로 한 번 지정되었기 때문에 변수값이 꼭 이전에 있던 변수(age)로 사용하지 않아도 동일한 값이 출력된다.
    var remain = workPeriod - age;
    return remain;

}
//생년, 현재년도, 일하는 기간
function yearsRetirement(birth, year, period){

   var age = year - birth;
   var remain = checkRetirement(age, period);
   return remain;

    //document.write(age+"세");
    //return age;
}
//은퇴 글씨 출력
function displayRetire(remain){
    if(remain >0) {
      document.write("은퇴가 " +remain + "년 남았습니다.");
    } else if(remain == 0){
     document.write("올해 은퇴합니다.");
    } else {
        document.write("이미 은퇴했습니다.");
    }
}

var currentYear = 2017;
var remain = yearsRetirement(2007, currentYear, 20);
//document.write("현재는 "+currentYear+"년 입니다.<br/>");
//displayRetire(remain);

var name = "John" ;

function third(){
    var c = "Hey" ;
    console.log("third Hey")
}

function second(){
    var b = "Hi!" ;
    third() ;
    console.log("second Hi")
}

function first(){
    var a = "Hello" ;
    second();
    console.log("first Hello")
}

first();
