/*function calcuateAge(birth) {
    var age = 2017 - birth;
    console.log(age);
    return age;
    console.log(age);
}
var ageJohn = calcuateAge(1990);
console.log(ageJohn);*/

/*
var ageJohn = 2017 - 1990;
var ageJohn = calcuateAge(1990);
var ageMike = 2017 - 2000;
var ageMary = 2017 - 2010;
console.log("ageJohn:" + ageJohn);
console.log("ageMike:" + ageMike);
console.log("ageMary:" + ageMary);
*/


/*function calcuateAge(birth2, birth) {
    console.log(birth2, birth);
    var age = birth2 - birth;
    console.log(age);
    if(age === 27) {
        return "20대";
    }
    else if(age === 10) {
        return "10대";
    }
    else if(age === 7) {
        return "아동";
    }
    return age;
    console.log(age);
}
var ageJohn = calcuateAge(2017, 2010);
console.log(ageJohn);
var birth = 2017;
var birth2 = 2011;
var ageJohn = calcuateAge(birth, birth2);*/


var scope = "global scope";
//console.log(scope);

function checkscope(scope) {

   //scope = scope;
   console.log(scope);
   scope = "local scope";
}
// scope는 변수의 영향 범위가 어디까지인가? 를 묻는 단어.
checkscope(scope);
console.log(scope);