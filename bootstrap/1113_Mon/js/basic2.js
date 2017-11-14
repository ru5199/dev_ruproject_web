var name ="John";
var age= 30;
var age2 = 20;

var boolean = true;

console.log(name+age);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(name+age));

var unified = name+age; // 문자와 숫자를 합쳐서 사용하면, string 값으로 변합니다.
console.log (unified);
console.log(typeof(unified));

var plusage = age+age2; // 숫자와 숫자(number)가 합치면, number 값이 나옵니다.
console.log(plusage);
console.log(typeof(plusage));

var name2 = "Jane";
var name3= name+name2;


console.log(name3);
console.log(typeof(name3));

var string = age2+age;
console.log(string);
console.log(typeof(string));

var booleanname = boolean+age;
console.log(booleanname);
console.log(typeof(booleanname));

var unified2 = name + (age+age2); //()안에 있는 변수를 먼저 계산하는 이유는 연산자 우선수위의 법칙을 따른 것이다.
console.log(unified2);
console.log(typeof(unified2));

var job, isMaried;

job = 'driver';
isMaried = false;

var str = name + ' is a ' + age + ', job ' + job + ' is he married? ' + isMaried;
console.log(str);

job = 'student';

var str = "I'm a " +  job;
console.log(str);


var str = '"'+"I'm a " + job + '"';
console.log(str);

var html_str = '\"I\'m a student\"' ;
document.write(html_str);

var html = '<html>';
var html2 = '<head>';
var html3 = '</head>';
var html4 = '<body>';
var html5 = '<h1>Hello world</h1>';
var html6 = '</body>';
var html7 = '</html>';

document.write("<html>");
document.write(html2);
document.write(html3);
document.write(html4);
document.write(html5);
document.write(html6);
document.write(html7);

var str = "<html><head></head><body></body>" + "<h1>Hello world</h1>" + "</body></html>";
document.write(str);

var special = '&#39;I&#39;m a' + job + '&#39;';
console.log(special);
console.log(typeof(special));


var table_str;
    table_str = "<table border>" + "<tr>" + "<td>순서</td>"+
            "<td>타이틀</td>"+
            "<td>설명</td>"+
            "<td>비고</td>"+
            "</tr>" +
            "<tr>" +
            "<td>1</td>" +
            "<td>HTML</td>" +
            "<td>웹문서구조</td>" +
            "<td></td>" +
            "</tr>" +
            "<tr>" +
            "<td>1</td>" +
            "<td>HTML</td>" +
            "<td>웹문서구조</td>" +
            "<td></td>" +
            "</tr>" +
            "<tr>" +
            "<td>1</td>" +
            "<td>HTML</td>" +
            "<td>웹문서구조</td>" +
            "<td></td>" +
            "</tr>" +
            "</tabel>";
document.write(table_str);


var lastName = prompt("what is the last name?");

console.log(lastName);
document.write(lastName);

document.write("<h1>" + lastName + "</h1>");

alert(lastName);