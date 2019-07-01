// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango", "grapefruit", "jackfruit", "chestnut"];

var messageArray = ["Congrats!!! You win!!!", "Sorry, you lost", "You guessed this letter aleady...", "Please press a letter"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "/", "?", ";", "[", "]", "=", "`"];
var underscoreArray = [];
var letters = [];
var remainingGuesses = 15;

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
        if(underscoreArray.length === wordSplit[i])
        {
            alert(messageArray[0]);
        }
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
    if(remainingGuesses === 0)
    {
        alert(messageArray[1]);
    }

    })

    function startOver()
    {
        var underscoreArray = [];
        var letters = [];
        var remainingGuesses = 15;
        var randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
        var wordSplit = randomFruit.split(''); 
        for(var i = 0; i < randomFruit.length; i++) 
        {
            underscoreArray[i] = " _ ";
            $("#underscores").append("<span>"+underscoreArray[i]+"</span>");
        }
    }
    
    $("#restart-button").on("click", function()
    {
        startOver();
    });

})
