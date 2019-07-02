// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango", "grapefruit", "jackfruit", "chestnut"];

// array of messages that will come up with "alert"
var messageArray = ["Congrats!!! You win!!!", "Sorry, you lost", "You guessed this letter aleady...", "Please press a letter"];

// characters that are not supposed to be used
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "/", "?", ";", "[", "]", "=", "`"];
var underscoreArray = [];
var letters = [];
var remainingGuesses = 15;
completeWord = false;

// random fruit from fruitArray
    var randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
    console.log(randomFruit);

// split the random word into individual letters and put into wordSplit array
    var wordSplit = randomFruit.split('');

// the random word letters are being replaced by "_" 
    for(var i = 0; i < randomFruit.length; i++) 
    {
    underscoreArray[i] = " _ ";
    $("#underscores").append("<span>"+underscoreArray[i]+"</span>")
    }

// consolelogging the key that is being pressed 
    document.addEventListener("keypress", function(event) 
    {
    console.log(event.key);
    console.log(remainingGuesses);
    remainingGuesses--;
    console.log(remainingGuesses);
    $("#remaining").html(remainingGuesses);

// putting input letter into lower case, and show letters in Guessed Letters group.
    var guessLetter = event.key.toLowerCase();

    letters.push(guessLetter);


// checking if input matches numbers[]. if yes, alert that user needs to type a letter.
    for(var j = 0; j < numbers.length; j++)
    {
        if(event.key === numbers[j])
        {
            alert(messageArray[3]);
        }
    }

    document.getElementById("guessedLetters").innerHTML = letters.join(""); 
    
// splitting random words into separate letters
    for(var i = 0; i < randomFruit.length; i++)
    {
        if(guessLetter === wordSplit[i])  
        {
            underscoreArray[i] = guessLetter;
            console.log(guessLetter, wordSplit[i]);
            document.getElementById("underscores").innerHTML = underscoreArray.join("");
        } 
    }
    

// checking if a letter was already pressed before. if yes, alert it. {not working...}
    for(var k = 0; k < letters.length; k++)
    {
        if(letters.length === event.key)
        {
            alert(messageArray[2]);
        }
    }

// if remaining guesses are 0, then alert losing message
    if(remainingGuesses === 0)
    {
        alert(messageArray[1]);
    }

// when current word is visible (no underscores are visible)m alert winning message
    var transformedWord = document.getElementById("underscores").innerHTML;

        if(transformedWord.indexOf("_") === -1)
        {
            completeWord = true;
        }
        if(completeWord === true)
        {
            alert(messageArray[0]);
        }


    }) 


// button that resets the page. it adds additional lines to current word, so it doesn't work, so in index.html I added a "refresh page" button... this one needs below needs work.
    function startOver ()
    {
    var underscoreArray = [];
    var letters = [];
    var remainingGuesses = 15;
    completeWord = false;
    var randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
    var wordSplit = randomFruit.split('');
    
        for(var i = 0; i < randomFruit.length; i++) 
        {
        underscoreArray[i] = " _ ";
        $("#underscores").append("<span>"+underscoreArray[i]+"</span>")
        }
    }
    $("#restart-button").on("click", function()
    {
        startOver();
    })
})
