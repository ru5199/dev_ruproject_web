
/*
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date1 = now.getDate() ;


var hour = now.getHours() ;
var minute = now.getMinutes() ;
var second = now.getSeconds() ;*/
//console.log(now);


var Person = function (name, job, live, post, date) {
    this.name = name ;
    this.job = job ;
    this.live = live ;
    this.post = post ;
    this.date = date ;
    this.time = time;

}

/*var Park = new Person("Park", 'doctor', '서울', '101', '2017-11-22' , '14:20');
var Marry = new Person("Marry", 'designer', '부산', '102', '2017-11-22', '14:20');
var Peter = new Person("Peter", 'teacher', '수원', '103', '2017-11-22', '14:20');
var Jane = new Person("Jane", 'student', '전주', '104', '2017-11-22', '14:20');
var Bill = new Person("Bill", 'programmer', '경주', '105', '2017-11-22', '14:20');

var arr = [] ;
arr.push(Park);
arr.push(Marry);
arr.push(Peter);
arr.push(Jane);
arr.push(Bill);*/

//위와 동일
var arr = [] ;

var now = new Date();

arr.push(new Person("Park", 'doctor', '서울', '101',now));

var now2 = new Date();

arr.push(new Person("Marry", 'designer', '부산', '102', '', ''));

var now3 = new Date();

arr.push(new Person("Peter", 'teacher', '수원', '103', '', ''));

var now4 = new Date();

arr.push(new Person("Jane", 'student', '전주', '104','', ''));

var now5 = new Date();

arr.push(new Person("Bill", 'programmer', '경주', '105', '', ''));

var text = "";

text += "<h1>게시판</h1>"

text += "<table border='1'>";
text += "   <tr>" ;
text += "       <th>순위</th>";
text += "       <th>이름</th>";
text += "       <th>직업</th>";
text += "       <th>사는 곳</th>";
text += "       <th>우편번호</th>";
text += "       <th>가입날짜</th>";
text += "       <th>가입시간</th>";
text += "   </tr>" ;


for(var i = 0 ; i < arr.length ; i++){
    text +=     "<tr>" ;
    text +=     "<th>"+(arr.length - i)+"</th>" ;
    text +=     "<td>"+arr[i].name+"</td>" ;
    text +=     "<td>"+arr[i].job+"</td>" ;
    text +=     "<td>"+arr[i].live+"</td>" ;
    text +=     "<td>"+arr[i].post+"</td>" ;
    var day =
    text +=     "<td>"+arr[i].date.getFullYear()+"-"+arr[i].date.getFullYear()+"</td>" ;
    text +=     "<td>"+arr[i].date.getHours()+"-"++"</td>" ;


    /*var day = arr[i].date ;
    text +=     "<td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>" ;
    text +=     "<td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>" ;
    text +=     "</tr>";*/

    //console.log(arr[i].name);
    //console.log(arr[i].birthYear);
    //console.log(arr[i].job);
}

text += "</table>";

document.write(text);

/*
5개
순위 | 이름 | 직업 | 사는 곳 | 우편번호 | 오늘 날짜 |*/
