/*
GAME FUNCTIONS
- Player must guess a number between a min and max
- Player gets a certain amount of guess
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//game values
let min = 1,
    max=10;
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//ui elements
const game = document.querySelector('#game'),
      minNum= document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min
maxNum.textContent = max

//play again event listener

game.addEventListener('mousedown', function(e){
if(e.target.className === 'play-again'){
  window.location.reload()
}
})

//listen to guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //validate 
  if(isNaN(guess) || guess <min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  //check if won
  if(guess === winningNum){
    //game over won

    gameOver(true, `${winningNum} is correct, You win!`)
      // //disable input
      // guessInput.disabled= true
      // //change border
      // guessInput.style.borderColor = 'green'
      // //set message
      // setMessage(`${winningNum} is correct, You win!`, 'green')

  }else{
      //wrong number
      guessesLeft -= 1
      if(guessesLeft === 0){
      //game over lost

      gameOver(false, `Game Over, You Lost! The correct number was ${winningNum}.`)
      //   //disable input
      // guessInput.disabled= true
      // //change border
      // guessInput.style.borderColor = 'red'
      // //set message
      // setMessage(`Game Over, You Lost! The correct number was ${winningNum}.`, 'red')

      }else{
        //game continues answer wrong
        //change border
      guessInput.style.borderColor = 'red'

      //clear input
      guessInput.value=''
      //tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
      }
  }
})



//game over

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'

//disable input
guessInput.disabled= true
//change border
guessInput.style.borderColor = color
//set text color
message.style.color = color
//set message
setMessage(msg)

//play again
guessBtn.value = 'PLAY AGAIN'
guessBtn.className += 'play-again'

}

//get winning num

function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}

//set Message
function setMessage(msg, color){
  message.style.color = color
message.textContent = msg
}