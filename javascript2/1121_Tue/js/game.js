

//var dice = Math.floor(Math.random()*6)+1;
//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-0').innerHTML = '<em>'+dice+'</em>';
/*document.querySelector('.dice').style.display = 'none';*/
//document.querySelector('.dice').src = './img/dice-1.png';

var dice ;
var roundScore ;
var activePlayer ;
var scores ;
var gamePlaying ;

function init() {

    roundScore = 0 ;
    activePlayer = 0 ;
    scores = [0,0] ;
    gamePlaying = true ;
    //시작할 때 주사위가 안보이게 하기
    document.querySelector('.dice').style.display = 'none';

    //시작할 때 숫자들 모두 0으로 바꾸기
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //승리한 winner! 텍스트 변경 및 클래스 변경
    document.getElementById('name-0').textContent = 'Player 1' ;
    document.getElementById('name-1').textContent = 'Player 2' ;
    //winner 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //active 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // 처음 player 1에게 active 클래스 추가
    document.querySelector('.player-0-panel').classList.add('active') ;
}

init();

var btn_roll = function() {
    //alert('roll 버튼 클릭');
    if(gamePlaying){
        //1.랜덤한 숫자 나오게 하기
        var dice = Math.floor(Math.random()*6)+1;
        console.log(dice) ;

        //2.주사위 그림 보여주기
        document.querySelector('.dice').style.display = 'block';
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = './img/dice-'+dice+'.png' ;

        //3.주사위가 1이 나오면, 플레이어가 바뀐다.
        if(dice !== 1){
            //add score
            roundScore += dice ;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
        //document.getElementById('score-0').textContent = dice ;

        /*if(dice === 1){
        diceDom.src = './img/dice-1.png' ;
        } else if(dice === 2){
        diceDom.src = './img/dice-2.png' ;
        } else if(dice === 3){
        diceDom.src = './img/dice-3.png' ;
        } else if(dice === 4){
        diceDom.src = './img/dice-4.png' ;
        } else if(dice === 5){
        diceDom.src = './img/dice-5.png' ;
        } else if(dice === 6){
        diceDom.src = './img/dice-6.png' ;
        }
        if(dice === )
        for(var i = dice; i < 7 ; i++){
            diceDom.src = './img/dice-'+i+'.png'
        }*/
        /*diceDom.src = './img/dice-1.png' ;
        diceDom.src = './img/dice-2.png' ;
        diceDom.src = './img/dice-3.png' ;
        diceDom.src = './img/dice-4.png' ;
        diceDom.src = './img/dice-5.png' ;
        diceDom.src = './img/dice-6.png' ;*/
    }
}

document.querySelector('.btn-roll').addEventListener('click', btn_roll);

function btn_hold(){
    //alert('hold 버튼을 눌렀습니다.');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value ;
    console.log("input="+input);
    var winningScore ;
    if(input){
        winningScore = input ;
    } else {
        winningScore = 20 ;
    }
    //3. winningScore 점이 넘으면
    if(scores[activePlayer]>= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none' ;

        //이겼을 때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying = false ;
    } else {
        nextPlayer();
    }

    //4. 다음 플레이어
    //nextPlayer();
}
document.querySelector('.btn-hold').addEventListener('click', btn_hold);

function nextPlayer() {

        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        //위의 코드와 동일
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

        roundScore = 0 ;
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

        // 플레이어 해당하는 패널 바꾸기
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // 플레이어 바꿀 때 주사위 안보이기
        document.querySelector('.dice').style.display = 'none';

}

function btn_new(){
    //alert('새로운 게임을 눌렀습니다.');
    init() ;
}

document.querySelector('.btn-new').addEventListener('click', btn_new) ;


/*
var dice2 = Math.floor(Math.random()*6)+1;
document.querySelector('#score-1').textContent = dice2;
document.querySelector('#current-1').textContent = dice2;
document.querySelector('#current-1').innerHTML = '<em>'+dice2+'</em>';
*/
/*for(var i=0; )*/
/*if(dice > dice2){

}*/

