// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango"];

var messageArray = ["You win!!!", "Sorry, you lost", "You guessed this letter aleady..."];
var underscoreArray = [];
var usedLetters = [];
var letters = [];
var remainingGuesses = 10;

// get another random word by pressing "restart" button
    var randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
    console.log(randomFruit);

// set remaining guesses to 10
   $("#remaining").append(remainingGuesses);

// split the random word into individual letters and put into wordSplit array
    var wordSplit = randomFruit.split('');
    console.log(wordSplit); 

// the random word letters are being replaced by "_" 
    for(var i = 0; i < randomFruit.length; i++) 
    {
    underscoreArray[i] = " _ ";
    $("#underscores").append("<span>"+underscoreArray[i]+"</span>")
    }

// consolelogging the key that is being pressed 
    document.addEventListener("keydown", function(event) 
    {
    console.log(event.key);

// putting input letter into lower case, and show letters in Guessed Letters group.
    var guessLetter = event.key.toLowerCase();  
    letters.push(guessLetter);
    document.getElementById("guessedLetters").innerHTML = letters.join("");
    
    /*if(typeof guessLetter === "number")
        {
            alert("Please type a letter!");
        } */

// splitting random words into separate letters
    for(var i = 0; i < randomFruit.length; i++)
    {
        if(guessLetter === wordSplit[i]) 
        {
            underscoreArray[i] = guessLetter;
            console.log(guessLetter, wordSplit[i]);
            document.getElementById("underscores").innerHTML = underscoreArray.join("");
        }
        if(guessLetter[i] !== wordSplit[i])
        {
        remainingGuesses = remainingGuesses - 1;
        }
    }

})
    if(remainingGuesses = 0)
    {
        alert(messageArray[1]);
    }



// make a var/array that stores the "tried" letters
// word display
})