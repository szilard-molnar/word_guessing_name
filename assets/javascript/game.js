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

// set remaining guesses to 15
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

// 
    document.addEventListener("keydown", function(event) 
    {
    console.log(event.key);

    var guessLetter = event.key.toLowerCase();  
    letters.push(guessLetter);
    document.getElementById("guessedLetters").innerHTML = letters.join("");
    
    /*if(typeof guessLetter === "number")
        {
            alert("Please type a letter!");
        } */

    for(var i = 0; i < randomFruit.length; i++)
    {
        if(guessLetter === wordSplit[i]) 
        {
            underscoreArray[i] = guessLetter;
            console.log(guessLetter, wordSplit[i]);
            document.getElementById("underscores").innerHTML = underscoreArray.join("");
        }
    }

})



// create a loop for "counting down missed tries", let's give the player 15 opportunities, for loop, i=1, i<15, i++
// make a var/array that stores the "tried" letters
// word display
})