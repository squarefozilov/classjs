
console.log('for loop version word guess')


//var possibleWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"]
 
var possibleWords = ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city", 
"shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
"johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
"hong kong", "chicago", "seoul", "los angeles", "mumbai"]

var answer = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
console.log(answer)

var mylengtharr = answer.length;
var wins=0 ;
var display =[mylengtharr];
var win =mylengtharr;
var letters = answer.split('');
var attemptsleft = 9;
var output="";
var userLetter="";
var guessingWord = [];
var guessedLetters =[];
var losses = 0;

 setup = function(){

    for(var i=0; i<answer.length;i++){

        display[i]=" _ ";
        output=output+display[i];

    }
        console.log("-"+ output);
        document.getElementById("p2").innerHTML = output;
        output=" ";

}

document.onkeyup = function(event) {
         var userGuess = event.key;
    
         checkUserletter(userGuess);

         console.log(answer);
         console.log(userGuess.toUpperCase());
            
        //guessedLetters.push(userGuess);
     
        
       
   }
    

   // declaring function for for checking user input

   function checkUserletter(userGuess){
        //  
    for (var i=0, j= answer.length; i<j; i++) {
        if (userGuess.toUpperCase() == answer[i]) {
            guessingWord[i] = userGuess.toUpperCase();
            i++;
             
            console.log('inside')
           
            if (guessingWord.join("") === answer) 
            {

                console.log("You won--");
                wins++
                i++
                
               
              
            }
            console.log(guessingWord);
        }
        if (userGuess.toUpperCase() != answer[i]){
                    
        }
          
        }
    
        document.getElementById("p3").innerText = guessingWord.join("__")
        document.getElementById("wins").innerHTML = wins;       
        document.getElementById("p1").innerHTML = losses; 




                                        
                                        }


   window.onload = function(){
         
    setup();

   }
