var name = 'John';
var age = 26;
var isMarried = 'no1';
var isMarried2 = 'yes';

/*if(isMarried == isMarried2) {
    console.log("John is married");
} //값만 비교
if(isMarried === isMarried2) {
    console.log("Jane is married");
} //주소값을 비교*/

/*if(isMarried === 'yes') {
    console.log("John is married");
} else if (isMarried === 'no') {
    console.log("I don't know");
} else if (isMarried === 'no1') {
    console.log("Tom is married");
} else {
    console.log("I don't know");
}
if(23 == "23") {
    console.log("23 ==");
}
if(23 === "23") {
    console.log("23 === 3개 ");
}*/

var job/* = 'driver';*/

job = prompt('what does john do?');

switch(job) {
    case 'driver':
        console.log('job is driver!!');
        break;
    case 'teacher':
        console.log('job is teacher!!');
        break;
    case 'coach':
        console.log('job is coach!!');
        break;
    default : console.log('job is ' + job);
        break;
}