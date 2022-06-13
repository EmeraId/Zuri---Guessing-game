function guessGame(){ 

   var arrRandom = [1,2];
 const game = arrRandom [  
   Math.floor(Math.random() * arrRandom.length) ]
  totalPoints = 0;

  const username = prompt('Welcome! Enter your Name')
  const firstGuess = prompt('guess the Number');

  if(firstGuess == game){
    for(totalPoints >= 0; totalPoints ++;)
      totalPoints++;
    console.log(`Great! You have ${totalPoints} point`);
  }
  else{
    console.log('Game Over');
  }

  
  const secondGuess = prompt('Guess the next Number')

  if(secondGuess == game){
    totalPoints++;
        console.log(`Great! You have ${totalPoints} points`);
  }
  else{
    console.log(`'Game Over. Your score:' ${totalPoints}`)
  }
}
guessGame();