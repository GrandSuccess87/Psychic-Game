

var computerChoices = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesSoFar = 0;
 var guessedLetters = [];


 document.onkeyup = function(event) { 
 
   var userGuess = event.key;
   guessedLetters.push(userGuess);

  
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



   if (userGuess === computerGuess) { 
       wins++;
       
   }

   else if (userGuess !== computerGuess) { 
       guessesLeft--;
       

   } 

   if (guessesLeft === 0) { 
     losses++; 
     var html = 
    //  "<h1 style='color: red'> GAME OVER. No more guesses left. Please try again</h1>";    
       // alert("No More Guesses Left - Game Over!");
       reset();
   }

   else {

       var html =
       "<p>You chose: " + userGuess + "</p>" +
       "<p>The computer chose: " + computerGuess + "</p>" +
       "<p>wins: " + wins + "</p>" +
       "<p>losses: " + losses + "</p>" +
       "<p id='left'>guessesLeft: " + guessesLeft +"</p>" +
       "<p id='guessLeft'>guessesSoFar: " + guessedLetters + "</p>";
   }
   


     function updateGuessedLetters () {
         document.querySelector('#left').innerHTML = "Your Guesses so far: ";
     };

    function updateGuessesLeft () {
         document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
     };

       

 function reset() {
   
     totalGuesses = 9;
     guessesLeft = 9;
     guessedLetters = [];
     

     updateGuessesLeft();
     updateGuessedLetters();
 }


     document.querySelector("#game").innerHTML = html;


}
 ;
