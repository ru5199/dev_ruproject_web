

var dice = Math.floor(Math.random()*6)+1;
document.querySelector('#score-0').textContent = dice;
document.querySelector('#current-0').textContent = dice;
document.querySelector('#current-0').innerHTML = '<em>'+dice+'</em>';
/*document.querySelector('.dice').style.display = 'none';*/
document.querySelector('.dice').src = './img/dice-1.png';

var dice2 = Math.floor(Math.random()*6)+1;
document.querySelector('#score-1').textContent = dice2;
document.querySelector('#current-1').textContent = dice2;
document.querySelector('#current-1').innerHTML = '<em>'+dice2+'</em>';

/*for(var i=0; )*/
/*if(dice > dice2){

}*/