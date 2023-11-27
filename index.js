const strike = document.getElementById('strikeButton');
const reset = document.getElementById('resetButton');

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

let score1 = 0;
let wicket1 = 0;
let score2 = 0;
let wicket2 = 0;

let ballcount =0
let scoresixBoll = 0;
let score12Ball = 0;
let wicketcount = 0;
let wicketcount2 = 0;
let wicketsix12Ball = 0;
let scoreNumber = [0, 1, 2, 3, 4, 6, 'w'];

function gameOver(){
    gameOverAudio.play()
    if(scoresixBoll>score12Ball){
        alert("INDIA WINS");
    }
    else if(scoresixBoll<score12Ball){
        alert("AUSTRALIA WINS");
        
    }
    else{
        alert("GAME IS TIE");
    }
    window.location.reload();
}
const ball = document.getElementsByClassName('ball')
strike.addEventListener('click', function(){
    strikeAudio.play()
    if(ballcount<12 ){
    ballcount++
    var score = scoreNumber[Math.floor(Math.random() * scoreNumber.length)];
    ball[ballcount - 1].innerHTML = score;

    if(ballcount<=6){
    if(score == 'w'){
        wicketcount++; 
    }else{
        scoresixBoll += score;
    }
     if(ballcount == 6){
        console.log(scoresixBoll);
       console.log(wicketcount);
      }
    }
    if(ballcount<=6){
        document.getElementById('score1').innerHTML = scoresixBoll
        document.getElementById('wicket1').innerHTML = wicketcount
    }
    else if (ballcount > 6 && ballcount <= 12) {
        if (score === 'w') {
            wicketcount2++;
        } else {
            score12Ball += score;
        }
        if (ballcount === 12) {
            console.log(score12Ball);
            console.log(wicketcount2);
        }
        else if(scoresixBoll<score12Ball){
            alert("AUSTRALIA WINS");
            window.location.reload();
            
        }
    }
    if(ballcount>6){
        document.getElementById('score2').innerHTML = score12Ball
        document.getElementById('wicket2').innerHTML = wicketcount2
    }

  }
  else{
  gameOver()
  }
});


reset.addEventListener('click', function(){
    window.location.reload();
});
 



