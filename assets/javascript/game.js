// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango"];

var messageArray = ["You win!!!", "Sorry, you lost", "You guessed this letter aleady..."];


// get another random word by pressing "restart" button
    var randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
    console.log(randomFruit);

    var wordSplit = randomFruit.split('');
    console.log(wordSplit); 

    var underscoreArray = [];

    for(var i = 0; i < randomFruit.length; i++) 
    {
    underscoreArray[i] = " _ ";
    $("#underscores").append("<span>"+underscoreArray[i]+"</span>")
    }

document.addEventListener("keydown", function(event) 
{
    console.log(event.key);
    var guessLetter = event.key.toLowerCase();
    for(var i = 0; i < randomFruit; i++)
    {
        if(guessLetter == wordSplit[i]) 
        {
            underscoreArray[i] = guessLetter;
            document.getElementById("underscores").innerHTML = underscoreArray.join("");
        }
    }
})

$("#guess-button").on("click", function()
{
})


// create a variable/array that stores the key inputs
var inputKey = [];

document.onkeyup = function(event) 
{
    var inputKey = event.key;
}



// create a loop for "counting down missed tries", let's give the player 15 opportunities, for loop, i=1, i<15, i++
// make a var/array that stores the "tried" letters
// word display
})