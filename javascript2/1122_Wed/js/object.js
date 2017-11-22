
/*
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date1 = now.getDate() ;


var hour = now.getHours() ;
var minute = now.getMinutes() ;
var second = now.getSeconds() ;*/
//console.log(now);


var Person = function (name, birthYear, job, live, post, date) {
    this.name = name ;
    this.birthYear = birthYear ;
    this.job = job ;
    this.live = live ;
    this.post = post ;
    this.date = date ;
    //this.time = time;

}


function display (birth){
    var now = new Date();
    var age = now.getFullYear()-birth;
    alert(age+'살 입니다.');
}

/*function display (birth){
    alert()
}*/

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

arr.push(new Person("Park", '2000', 'doctor', '서울', '101', now));

var now2 = new Date();

arr.push(new Person("Marry", '1990', 'designer', '부산', '102', now2));

var now3 = new Date();

arr.push(new Person("Peter", '2010', 'teacher', '수원', '103', now3));

var now4 = new Date();

arr.push(new Person("Jane", '1995', 'student', '전주', '104', now4));

var now5 = new Date();

arr.push(new Person("Bill", '2011', 'programmer', '경주', '105', now5));



//text += "<div style=text-align:center>"
var jobs = ["doctor", "designer", "teacher", "student", "programmer"] ;

//var text = "<center>";
text = "";
text += "<div style=text-align:center>"
text += "<h1>게시판</h1>"

text += "<table border=\'1\', width=\'800\' bgcolor='#fff'>";

text += "   <tr>" ;
text += "       <th>순위</th>";
text += "       <th>이름</th>";
text += "       <th>생년</th>";
text += "       <th>직업</th>";
text += "       <th>사는 곳</th>";
text += "       <th>우편번호</th>";
text += "       <th>가입날짜</th>";
text += "       <th>가입시간</th>";
text += "   </tr>" ;


for(var i = 0 ; i < arr.length ; i++){
    //text +=     "<div style=text-align:center;>";
    text +=     "<tr>" ;
    text +=     "<th>"+(arr.length - i)+"</th>" ;
    text +=     "<td>"+arr[i].name+"</td>" ;
    text +=     "<td><button onclick=\"display("+arr[i].birthYear+")\">"+arr[i].birthYear+"</button></td>" ;
    text +=     "<td>";
    text +=            "<select>";
                            for(var j = 0 ; j < jobs.length ; j++){
//    text +=                     //"<option>"+jobs[j]+"</option>";
//                                //+arr[i].job+
                                if(jobs[j] == arr[i].job){
    text +=                              "<option selected>"+jobs[j]+"</option>";
                                } else {
    text +=                              "<option>"+jobs[j]+"</option>";
                                }
                            }
    text +=            "</select>";
    text +=     "</td>" ;
    text +=     "<td>"+arr[i].live+"</td>" ;
    text +=     "<td><input type = \'text\' value=\'"+arr[i].post+"\'></td>" ;
    var day = arr[i].date ;
    text +=     "<td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>" ;
    text +=     "<td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>" ;
    text +=     "</tr>";

    //console.log(arr[i].name);
    //console.log(arr[i].birthYear);
    //console.log(arr[i].job);
}
text += "</div>";
text += "</table>";
//text += "</center>";




document.write(text);

/*
5개
순위 | 이름 | 직업 | 사는 곳 | 우편번호 | 오늘 날짜 |*/
