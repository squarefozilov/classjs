
console.log('no for loop version')
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];
var userText = document.getElementById("user-text-wins");
var userTextloses = document.getElementById("user-text-loses");
document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 9;
       losses ++;
       guessChoices = [];

       
   }

   userText.textContent = wins;
   document.getElementById("p1").innerHTML = losses;  
   document.getElementById("p2").innerHTML = numGuesses;  
   document.getElementById("p3").innerHTML = guessChoices;
   
   }
};