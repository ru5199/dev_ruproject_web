/*
var name = "John";
var birth = 2000;

function getAge(birthArg){
    var num = 2017 - birthArg ;
    return num;
}

var person = {
    name : "John",
    birth : 2000,
    getAge : function() {
        var num = 2017 - this.birth;
        return num;
    }
}

console.log(person.getAge());
person.birth = 2010;
console.log(person.getAge());
person.name = 'Mike';
console.log(person);
*/
/*
var person2 = new Object(); // var person2 = {} ; 과 동일함
person2.name = 'Jane';
person2.birth = 2000;

console.log(person2.name);
console.log(person2['name']);
*/

var building = {
    nation : "Korea",
    city : "Seoul",
    birth : 1900,
    period : function() {
        var num = 2017 - this.birth ;
        return num;
    },
    maker : ["John", "Jane", "Mike"]
}
/*
객체 이름을 building :
- 나라 :
- 도시 :
- 건축년도 :
- 건축기간 : period 함수(현재 - 건축년도)
- 건축자 : maker "John", "Jane", "Mike"
*/
/*
var building2 = new Object();
building2.nation = "Korea";
*/

building.nation = "China";
building.city = "Beijing";
building.birth = 2000;
building.maker[0] = "John2";
building.maker[1] = "Jane2";


//setTimeout( function () { window.open("http://www.naver.com", "네이버", "width=500, height=500, resizable=yes"); }, 2000 ) ;
//console.log(building);
/*
var i =0;
setInterval(function(){
        console.log("["+i+"]번째"); i++;
}, 2000);
*/
/*
var i =0;
setInterval(function(){
        var num = Math.random();
        console.log(Math.round((num*10)+1));
        Math.ceil(); 올림
        Math.floor(); 내림

}, 1000);
*/
/*
var date = new Date();
console.log(date.getYear()+1990);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일");
console.log(date.getHours()+"시간");
console.log(date.getMinutes()+"분");
console.log(date.getMilliseconds()+"초");
*/

